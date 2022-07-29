import { useState } from 'react';
import styles from './LeftDiv.module.css';
import Button1 from './UI/Button1';
import Button2 from './UI/Button2';
import './RightDiv';
const LeftDiv = (props) => {
    const [index,setIndex] = useState(0);
    // const [newLangIndex,setLangIndex] = useState(0);
    const content = [
      [
        {
          lang: "en",
          title: "Infrastructure",
          heading: "Surakshit Sadak Yojna",
          data: "In May 2016 the PM Surakshit Sadak Yojna earmarked Rs 2000 cr to eliminate the danger zones on highways that were death traps for vehicles: India had the highest number of road fatalities in the world, then estimated at more than 231,000 by the World health Oraganization.",
          prev_button: "",
          next_button: "Vande Bharat Express",
          next: "next",
          previous: "previous",
          home: "Home",
        },
        {
          lang: "en",
          title: "Infrastructure",
          heading: "Vande Bharat Express",
          data: "Railways, long-neglected, went through a similar makeover, with some remarkable indigenisation. The Vande Bharat Express, India’s first high-tech, energy-efficient train, designed and built in 18 months by Integral Coach Factory at Chennai fulfilled the task set by Narendra Modi’s signature “Make in India” initiative, at a cost estimated to be 40% cheaper than the equivalent built in Europe. It was flagged off by the Prime Minister at the New Delhi railway station on 15 February 2019. The semi-high speed Tejas Express between Mumbai and Karmali in Goa started in May 2017, covered 551.7 km in 8 hours and 30 minutes.ays",
          prev_button: "Vande Bharat Express",
          next_button: "Bullet train",
          next: "next",
          previous: "previous",
          home: "Home"
        },
      ],
      [
        {
          lang: "hi",
          title: "आधारभूत संरचना",
          heading: "सुरक्षित सड़क योजना",
          data: "मई 2016 में पीएम सुरक्षित सड़क योजना ने राजमार्गों पर खतरे के क्षेत्रों को खत्म करने के लिए 2000 करोड़ रुपये निर्धारित किए जो वाहनों के लिए मौत के जाल थे: भारत में दुनिया में सबसे ज्यादा सड़क दुर्घटनाएं थीं, तब विश्व स्वास्थ्य संगठन द्वारा 231,000 से अधिक का अनुमान लगाया गया था।",
          prev_button: "",
          next_button: "वंदे भारत एक्सप्रेस",
          next: "अगला",
          previous: "पिछला",
          home: "होम",
        },
        {
          lang: "hi",
          title: "आधारभूत संरचना",
          heading: "वंदे भारत एक्सप्रेस",
          data: "रेलवे, लंबे समय से उपेक्षित, कुछ उल्लेखनीय स्वदेशीकरण के साथ एक समान बदलाव के माध्यम से चला गया। वंदे भारत एक्सप्रेस, भारत की पहली हाई-टेक, ऊर्जा-कुशल ट्रेन, चेन्नई में इंटीग्रल कोच फैक्ट्री द्वारा 18 महीने में डिजाइन और निर्मित, नरेंद्र मोदी के हस्ताक्षर 'मेक इन इंडिया' पहल द्वारा निर्धारित कार्य को 40 की अनुमानित लागत पर पूरा किया गया। यूरोप में निर्मित समकक्ष से % सस्ता। इसे 15 फरवरी 2019 को नई दिल्ली रेलवे स्टेशन पर प्रधान मंत्री द्वारा हरी झंडी दिखाकर रवाना किया गया था। मुंबई और गोवा में करमाली के बीच अर्ध-उच्च गति तेजस एक्सप्रेस मई 2017 में शुरू हुई, 8 घंटे और 30 मिनट में 551.7 किमी की दूरी तय की।",
          prev_button: "सुरक्षित सड़क योजना",
          next_button: "बुलेट ट्रेन",
          next: "अगला",
          previous: "पिछला",
          home: "होम",
        },
      ],
    ];
    const nextContent = () => {
        if(content[0].length>index+1){setIndex(index+1)}
    };
    const previousContent = () => {
      if(index>0){setIndex(index-1)};
    }
    return (
      <div className={`${styles.angled} ${props.className}`}>
        <div className={styles.division}>
          <div>
            <h1 className={`${styles.title} title`}>
              {content[props.langIndex][index].title}
            </h1>
            <h4>{content[props.langIndex][index].heading}</h4>
            <p className="paragraph">{content[props.langIndex][index].data}</p>
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
                  <span>{content[props.langIndex][index].previous}</span> &laquo;
                </h2>
                <span>{content[props.langIndex][index].prev_button}</span>
              </Button1>
              <Button1
                className={`${styles.button_next}`}
                onClick={nextContent}
              >
                <h2>
                  <span>{content[props.langIndex][index].next}</span> &raquo;
                </h2>
                <span>{content[props.langIndex][index].next_button}</span>
              </Button1>
            </div>

            <Button2 className={styles.newButton}>
              <img className={styles.btnImage} src={require("../images/home.png")} alt="" />
              {content[props.langIndex][index].home}
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
