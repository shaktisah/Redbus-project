import React from 'react';
import styles from './TrainFeatures.module.css';

const TrainFeatures = () => {
  return (
    <div className={styles.featuresContainer}>
      {/* Offers Section */}
      <div className={styles.sectionTitle}>Offers</div>
      <div className={styles.offersScroll}>
        <div className={styles.offerCard} style={{ background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' }}>
          <div className={styles.promoTag}>FIRST</div>
          <h3>Zero Convenience Fee</h3>
          <p>On your first train booking</p>
          <div className={styles.codeBox}>Use Code: <b>FIRST</b></div>
        </div>

        <div className={styles.offerCard} style={{ background: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)' }}>
          <div className={styles.promoTag}>GET 10% OFF</div>
          <h3>Get up to Rs 50 OFF</h3>
          <p>On train ticket bookings</p>
          <div className={styles.codeBox}>Use Code: <b>RAILTICKETS</b></div>
        </div>

        <div className={styles.offerCard} style={{ background: 'linear-gradient(to right, #b224ef 0%, #7579ff 100%)' }}>
          <div className={styles.promoTag}>EARN BACK</div>
          <h3>Win Rs 100 Cashback</h3>
          <p>Pay with RedBus Wallet</p>
          <div className={styles.codeBox}>Use Code: <b>RBWALLET</b></div>
        </div>

        <div className={styles.offerCard} style={{ background: 'linear-gradient(to right, #11998e 0%, #38ef7d 100%)' }}>
          <div className={styles.promoTag}>UPI OFFER</div>
          <h3>Flat Rs 25 OFF</h3>
          <p>When you pay via UPI</p>
          <div className={styles.codeBox}>Use Code: <b>TRAINUPI</b></div>
        </div>
      </div>

      {/* Why choose redRail Section */}
      <div className={styles.whySection}>
        <div className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '40px' }}>
          Why choose redRail?
        </div>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.iconCircle} style={{ background: '#fff0f0' }}>🚉</div>
            <h4>IRCTC Authorized Partner</h4>
            <p>We are officially authorized by IRCTC for train ticket booking. Book your tickets with confidence.</p>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.iconCircle} style={{ background: '#f0f4ff' }}>💸</div>
            <h4>Zero Convenience Fee</h4>
            <p>Save money with absolutely zero convenience fee on your first train ticket booking via redRail.</p>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.iconCircle} style={{ background: '#f0fff4' }}>⚡</div>
            <h4>Instant Refunds</h4>
            <p>Get instant refunds on train ticket cancellations straight into your chosen payment method.</p>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.iconCircle} style={{ background: '#fff9f0' }}>🎧</div>
            <h4>Customer Support</h4>
            <p>Get 24/7 priority customer support for all your train ticket booking related queries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainFeatures;
