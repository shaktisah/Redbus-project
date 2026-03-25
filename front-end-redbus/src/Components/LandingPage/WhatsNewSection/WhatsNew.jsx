import React from 'react';
import styles from './WhatsNew.module.css';

const WhatsNew = () => {
  return (
    <div className={styles.container}>
      <h2>What's new</h2>
      
      <div className={styles.bannerRow}>
        <div className={styles.bannerCard} style={{ backgroundColor: '#2b1b3d' }}>
          <div className={styles.textSide}>
            <h3>Free Cancellation</h3>
            <p>Don't want to travel? Get free cancellation.</p>
            <span className={styles.knowMore}>Know more &nbsp;&rarr;</span>
          </div>
          <div className={styles.iconSide} style={{ backgroundColor: '#442a5c' }}>
            <img src="https://st.redbus.in/Images/webplatform/measures/safetyplus.svg" alt="Free Cancellation" />
          </div>
        </div>

        <div className={styles.bannerCard} style={{ backgroundColor: '#edf2ff' }}>
          <div className={styles.textSide}>
            <h3 style={{ color: '#1d1d1d' }}>Reserve seats online</h3>
            <p style={{ color: '#555' }}>Book bus tickets seamlessly online.</p>
            <span className={styles.knowMore} style={{ color: '#1034d9' }}>Know more &nbsp;&rarr;</span>
          </div>
          <div className={styles.iconSide} style={{ backgroundColor: '#dce5fc' }}>
            <img src="https://st.redbus.in/Images/rdc/rdc-hero-image.png" alt="Reserve Seats" style={{ borderRadius: '50%', objectFit: 'cover' }} />
          </div>
        </div>

        <div className={styles.bannerCard} style={{ backgroundColor: '#f0f8ff' }}>
          <div className={styles.textSide}>
            <h3 style={{ color: '#1d1d1d' }}>Train Tickets</h3>
            <p style={{ color: '#555' }}>Book train tickets easily & securely.</p>
            <span className={styles.knowMore} style={{ color: '#1034d9' }}>Know more &nbsp;&rarr;</span>
          </div>
          <div className={styles.iconSide} style={{ backgroundColor: '#e1f0fc' }}>
            <img src="https://st.redbus.in/web/images/trains/redrail_illus.svg" alt="Train" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
