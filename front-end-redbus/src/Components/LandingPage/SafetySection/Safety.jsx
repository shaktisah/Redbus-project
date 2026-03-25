import React from "react";
import styles from "./Safety.module.css";

const arr = [
  {
    id: 1,
    heading: "Sanitized Bus",
    descriptions: "All Safety+ buses are sanitized and disinfected before and after every trip.",
  },
  {
    id: 2,
    heading: "Mandatory masks",
    descriptions: "Proper masks are mandatory for all passengers and bus staff.",
  },
  {
    id: 3,
    heading: "Thermal Screening",
    descriptions: "All passengers will undergo thermal screening. Temperature checks for staff are done before every trip.",
  },
];

const Safety = () => {
  return (
    <div className={styles.grapeBackground}>
      <div className={styles.mainContainer}>
        <div className={styles.headerFlex}>
          <div className={styles.imgBox}>
            <img src="https://st.redbus.in/Images/webplatform/measures/safetyplus.svg" alt="shield" />
          </div>
          <div className={styles.titleBox}>
            <h2>Introducing Safety+</h2>
            <h3>Opt to Travel Safe with redBus</h3>
            <p>
              Look for buses with <span className={styles.boldspan}>safety+</span> tag while booking your journey
            </p>
          </div>
          <div className={styles.actionBox}>
            <button 
              className={styles.knowMoreBtn} 
              onClick={() => window.open('https://www.redbus.in/info/safety_guidelines', '_blank')}
            >
              KNOW MORE
            </button>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.lowerFlex}>
          {arr.map((item) => {
            return (
              <div key={item.id} className={styles.lowerFlexItems}>
                <div className={styles.itemHeader}>
                  <i className="fa fa-check-circle" style={{color: '#4cd964', marginRight: '8px', fontSize: '18px'}}></i>
                  <h3>{item.heading}</h3>
                </div>
                <p>{item.descriptions}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Safety;
