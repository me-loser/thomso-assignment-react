import { useState } from 'react';
import styles from './LeftDiv.module.css';
import Button1 from './UI/Button1';
import Button2 from './UI/Button2';
const LeftDiv = (props) => {
    // const [isValid,setIsValid] =useState(true);
    const [index,setIndex] = useState(0);
    const content = [
      {
        title: "Infrastructure",
        heading: "Surakshit Sadak Yojna",
        data: "In May 2016 the PM Surakshit Sadak Yojna earmarked Rs 2000 cr to eliminate the danger zones on highways that were death traps for vehicles: India had the highest number of road fatalities in the world, then estimated at more than 231,000 by the World health Oraganization.",
        prev_button: "",
        next_button: "Vande Bharat Express",
      },
      {
        title: "Infrastructure",
        heading: "Vande Bharat Express",
        data: "Railways, long-neglected, went through a similar makeover, with some remarkable indigenisation. The Vande Bharat Express, India’s first high-tech, energy-efficient train, designed and built in 18 months by Integral Coach Factory at Chennai fulfilled the task set by Narendra Modi’s signature “Make in India” initiative, at a cost estimated to be 40% cheaper than the equivalent built in Europe. It was flagged off by the Prime Minister at the New Delhi railway station on 15 February 2019. The semi-high speed Tejas Express between Mumbai and Karmali in Goa started in May 2017, covered 551.7 km in 8 hours and 30 minutes.ays",
        prev_button: "Vande Bharat Express",
        next_button: "Bullet train",
      },
    ];
    const nextContent = () => {
        if(content.length>index+1){setIndex(index+1)}
    };
    const previousContent = () => {
      if(index>0){setIndex(index-1)};
    }


    return (
      <div className={`${styles.angled} ${props.className}`}>
        <div className={styles.division}>
          <div>
            <h1 className={styles.title}>{content[index].title}</h1>
            <h4>{content[index].heading}</h4>
            <p>{content[index].data}</p>
          </div>
          <div className={styles.button}>
            <div className={styles.button1}>
              <Button1
                className={`${styles.button_previous} ${
                  index > 0 && styles.valid
                }`}
                onClick={previousContent}
              >
                <h2>
                  <span>Previous</span> &laquo;
                </h2>
                <span>{content[index].prev_button}</span>
              </Button1>
              <Button1
                className={`${styles.button_next}`}
                onClick={nextContent}
              >
                <h2>
                  <span>Next</span> &raquo;
                </h2>
                <span>{content[index].next_button}</span>
              </Button1>
            </div>

            <Button2 className={styles.newButton}>
              <img
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
            src={require("../images/animation.png")}
            alt=""
          />
        </div>
      </div>
    );
};

export default LeftDiv;