import { useState } from 'react';
import styles from './LeftDiv.module.css';
import Button1 from './UI/Button1';
import Button2 from './UI/Button2';
const LeftDiv = (props) => {
    const [isValid,setIsValid] =useState(true);
    // const contentHandler =() => {
    //     const second_div =document.querySelector('.')
    // }

    const nextContent = () => {
        setIsValid(false);
        document.querySelector('.title').innerHTML = "Bullet Train";
    };
    const previousContent = () => {
      setIsValid(true);
      document.querySelector(".title").innerHTML = "Vande Bharat Express";
    }


    return (
      <div className={`${styles.angled} ${props.className}`}>
        <div className={styles.division}>
          <div className={`${styles.previous} ${!isValid && styles.invalid}`}>
            <h1 className={styles.heading}>Infrasturcture</h1>
            <h4>Surakshit Sadak Yojna</h4>
            <p>
              In May 2016 the PM Surakshit Sadak Yojna earmarked Rs 2000 cr to
              eliminate the danger zones on highways that were death traps for
              vehicles: India had the highest number of road fatalities in the
              world, then estimated at more than 231,000 by the World health
              Oraganization.
            </p>
          </div>
          <div className={`${styles.next} ${!isValid && styles.invalid}`}>
            <h1 className={styles.heading}>Infrasturcture</h1>
            <h4>Vande Bharat Express</h4>
            <p>
              Railways, long-neglected, went through a similar makeover, with
              some remarkable indigenisation. The Vande Bharat Express, India’s
              first high-tech, energy-efficient train, designed and built in 18
              months by Integral Coach Factory at Chennai fulfilled the task set
              by Narendra Modi’s signature “Make in India” initiative, at a cost
              estimated to be 40% cheaper than the equivalent built in Europe.
              It was flagged off by the Prime Minister at the New Delhi railway
              station on 15 February 2019. The semi-high speed Tejas Express
              between Mumbai and Karmali in Goa started in May 2017, covered
              551.7 km in 8 hours and 30 minutes.ays
            </p>
          </div>

          <div className={styles.button}>
            <div className={styles.button1}>
              <Button1
                className={`${styles.button_previous} ${
                  !isValid && styles.invalid
                }`}
                onClick={previousContent}
              >
                <h2 className={styles.button_heading}>
                  <span>Previous</span> &laquo;
                </h2>
                <span>Surakshit Sadak Yojna</span>
              </Button1>
              <Button1
                className={`${styles.button_next}`}
                onClick={nextContent}
              >
                <h2 className={styles.button_heading}>
                  <span>Next</span> &raquo;
                </h2>
                <span className="title">Vande Bharat Express</span>
              </Button1>
            </div>

            <Button2 className={styles.newButton}>
              <img
                className={styles.image}
                width={"20em"}
                src={require("../images/home.png")}
                alt=""
              />
              Home
            </Button2>
          </div>
        </div>
        <div className={styles.animatedBox}>
          <img
            className={styles.animatedImage}
            src={require("../images/animation.png")} alt=""
          />
        </div>
      </div>
    );
};

export default LeftDiv;