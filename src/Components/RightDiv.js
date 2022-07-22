import styles from './RightDiv.module.css';
import Button2 from './UI/Button2';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const RightDiv = (props) => {
  return (
      <Carousel className={"main-slider"} showArrows={true}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={require("../carousel-img1.jpeg")}
            alt=""
          />
          <div className={styles.textAndButton}>
            <p className={styles.imageText}>
              The Prime Minister, Shri Narendra Modi flagging off the train
              between Maduadih and Patna, at Maduadih, in Varanasi, Uttar
              Pradesh on March 12, 2018.
            </p>
            <Button2 className={styles.newButton}>
              <img
                src={require("../Language.png")}
                height={"25px"}
                alt=""
              ></img>
              Language
            </Button2>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={require("../carousel-img2.jpeg")}
            alt=""
          />
          <div className={styles.textAndButton}>
            <p className={styles.imageText}>
              The Prime Minister, Shri Narendra Modi flagging off the train
              between Maduadih and Patna, at Maduadih, in Varanasi, Uttar
              Pradesh on March 12, 2018.
            </p>
            <Button2 className={styles.newButton}>
              <img
                src={require("../Language.png")}
                height={"25px"}
                alt=""
              ></img>
              Language
            </Button2>
          </div>
        </div>
      </Carousel>
  );
}





export default RightDiv;