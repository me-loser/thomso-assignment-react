import styles from './RightDiv.module.css';
import { useState } from 'react';
import Button2 from './UI/Button2';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './LeftDiv';

const RightDiv = (props) => {
  const [isValid,setIsValid] = useState(true);
  const [getLanguageIndex,setLanguageIndex] = useState('0');
  const rightContent = [
    {
      paragraph:
        "The Prime Minister, Shri Narendra Modi flagging off the train between Maduadih and Patna, at Maduadih, in Varanasi, Uttar Pradesh on March 12, 2018.",
      language: "Language",
    },
    {
      paragraph:
        "प्रधानमंत्री श्री नरेन्द्र मोदी 12 मार्च, 2018 को वाराणसी, उत्तर प्रदेश के मडुआडीह में मडुआडीह और पटना के बीच ट्रेन को झंडी दिखाकर रवाना करते हुए।",
      language: "भाषा",
    },
  ];
  const changeLanguage = () => {
    setIsValid(false);
    if(!isValid){
      setIsValid(true);
    }
  }
  const languageEnglish =() =>{
    setIsValid(true);
    setLanguageIndex(0);
  }
  const languageHindi = () =>{
    setIsValid(true);
    setLanguageIndex(1);
  } 
  props.passLanguageIndex(getLanguageIndex);
  return (
    <Carousel className={"main-slider"} showArrows={true}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={require("../images/carousel-img1.jpeg")}
          alt=""
        />
        <div className={styles.textAndButton}>
          <p className={styles.imageText}>
            {rightContent[getLanguageIndex].paragraph}
          </p>

          <div className={styles.dropdown}>
            <div
              className={`${styles.dropdownList} ${!isValid && styles.invalid}`}
            >
              <button className={styles.blockBtn} onClick={languageEnglish}>
                English
              </button>

              <button className={styles.blockBtn} onClick={languageHindi}>
                Hindi
              </button>
            </div>
            <Button2 className={styles.dropbtn} onClick={changeLanguage}>
              <img
                className={styles.dropdownImage}
                src={require("../images/Language.png")}
                height={"25px"}
                alt=""
              ></img>
              {rightContent[getLanguageIndex].language}
            </Button2>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={require("../images/carousel-img2.jpeg")}
          alt=""
        />
        <div className={styles.textAndButton}>
          <p className={styles.imageText}>
            {rightContent[getLanguageIndex].paragraph}
          </p>
          <div className={styles.dropdown}>
            <div
              className={`${styles.dropdownList} ${!isValid && styles.invalid}`}
            >
              <button className={styles.blockBtn} onClick={languageEnglish}>
                English
              </button>

              <button className={styles.blockBtn} onClick={languageHindi}>
                Hindi
              </button>
            </div>
            <Button2 className={styles.dropbtn} onClick={changeLanguage}>
              <img
                src={require("../images/Language.png")}
                height={"25px"}
                alt=""
              ></img>
              {rightContent[getLanguageIndex].language}
            </Button2>
          </div>
        </div>
      </div>
    </Carousel>
  );
}





export default RightDiv;