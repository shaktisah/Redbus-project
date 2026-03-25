import React from 'react';
import styles from './GovernmentBuses.module.css';

const GovernmentBuses = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h2>Government Buses</h2>
        <span className={styles.viewAll}>View All</span>
      </div>

      <div className={styles.slider}>
        <div className={styles.busCard}>
          <div className={styles.topSection}>
            <div className={styles.logoCircle}>
              <img src="https://st.redbus.in/Images/carousel/APSRTC.svg" alt="APSRTC" />
            </div>
            <div>
              <div className={styles.titleRow}>
                <h3>APSRTC</h3>
                <span className={styles.rating}>⭐ 3.93</span>
              </div>
              <p className={styles.desc}>Andhra Pradesh State Road Transport Corporation</p>
            </div>
          </div>
          <div className={styles.midSection}>
            <span className={styles.badge}>Official booking partner of redBus</span>
          </div>
          <div className={styles.bottomSection}>
            10 Lakh+ services per day | Online booking
          </div>
        </div>

        <div className={styles.busCard}>
          <div className={styles.topSection}>
            <div className={styles.logoCircle}>
              <img src="https://st.redbus.in/Images/carousel/TSRTC.svg" alt="TSRTC" />
            </div>
            <div>
              <div className={styles.titleRow}>
                <h3>TSRTC</h3>
                <span className={styles.rating}>⭐ 3.96</span>
              </div>
              <p className={styles.desc}>Telangana State Road Transport Corporation</p>
            </div>
          </div>
          <div className={styles.midSection}>
            <span className={styles.badge}>Official booking partner of redBus</span>
          </div>
          <div className={styles.bottomSection}>
            5 Lakh+ services per day | Online booking
          </div>
        </div>

        <div className={styles.busCard}>
          <div className={styles.topSection}>
            <div className={styles.logoCircle}>
              <img src="https://st.redbus.in/Images/carousel/KSRTC.svg" alt="KSRTC" />
            </div>
            <div>
              <div className={styles.titleRow}>
                <h3>KSRTC</h3>
                <span className={styles.rating}>⭐ 3.90</span>
              </div>
              <p className={styles.desc}>Kerala State Road Transport Corporation</p>
            </div>
          </div>
          <div className={styles.midSection}>
            <span className={styles.badge}>Official booking partner of redBus</span>
          </div>
          <div className={styles.bottomSection}>
            3 Lakh+ services per day | Online booking
          </div>
        </div>

        <div className={styles.busCard}>
          <div className={styles.topSection}>
            <div className={styles.logoCircle}>
              <img src="https://st.redbus.in/Images/carousel/SBSTC.svg" alt="SBSTC" />
            </div>
            <div>
              <div className={styles.titleRow}>
                <h3>SBSTC</h3>
                <span className={styles.rating}>⭐ 3.85</span>
              </div>
              <p className={styles.desc}>South Bengal State Transport Corporation</p>
            </div>
          </div>
          <div className={styles.midSection}>
            <span className={styles.badge}>Official booking partner of redBus</span>
          </div>
          <div className={styles.bottomSection}>
            1 Lakh+ services per day | Online booking
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentBuses;
