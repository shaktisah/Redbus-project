import React from 'react';
import styles from './Offers.module.css';

const Offers = () => {
  return (
    <div className={styles.offersContainer}>
      <div className={styles.offersHeader}>
        <h2>Offers for you</h2>
        <span className={styles.viewAll}>View All</span>
      </div>

      <div className={styles.offersScroll}>
        <div className={styles.offerCard} style={{ background: 'linear-gradient(135deg, #fcebed, #f8d7da)' }}>
          <div className={styles.headerRow}>
            <div className={styles.busPill}>Bus</div>
            <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="logo" className={styles.logoTiny}/>
          </div>
          <div className={styles.cardContent}>
            <div>
              <h3>Save up to Rs 250 on AP, TS routes</h3>
              <p>Valid till 31 Jan</p>
              <div className={styles.codeBox}>Use code <b>SUPERHIT</b></div>
            </div>
            <img src="https://st.redbus.in/Images/INDOFFER/COVID-19/heroimage2.png" alt="promo" className={styles.promoImg} />
          </div>
        </div>

        <div className={styles.offerCard} style={{ background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)' }}>
          <div className={styles.headerRow}>
            <div className={styles.busPill}>Bus</div>
            <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="logo" className={styles.logoTiny}/>
          </div>
          <div className={styles.cardContent}>
            <div>
              <h3>Save up to Rs 300 on First Booking</h3>
              <p>Valid till 31 Jan</p>
              <div className={styles.codeBox}>Use code <b>FIRST</b></div>
            </div>
            <img src="https://st.redbus.in/Images/INDOFFER/COVID-19/heroimage2.png" alt="promo" className={styles.promoImg} />
          </div>
        </div>

        <div className={styles.offerCard} style={{ background: 'linear-gradient(135deg, #f3e5f5, #e1bee7)' }}>
          <div className={styles.headerRow}>
            <div className={styles.busPill}>Bus</div>
            <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="logo" className={styles.logoTiny}/>
          </div>
          <div className={styles.cardContent}>
            <div>
              <h3>Save up to Rs 200 with Axis Bank</h3>
              <p>Valid till 31 Jan</p>
              <div className={styles.codeBox}>Use code <b>AXIS200</b></div>
            </div>
            <img src="https://st.redbus.in/Images/INDOFFER/COVID-19/heroimage2.png" alt="promo" className={styles.promoImg} />
          </div>
        </div>

        <div className={styles.offerCard} style={{ background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)' }}>
          <div className={styles.headerRow}>
            <div className={styles.busPill}>Bus</div>
            <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="logo" className={styles.logoTiny}/>
          </div>
          <div className={styles.cardContent}>
            <div>
              <h3>Flat Rs 50 OFF on Train Tickets</h3>
              <p>Valid till 31 Jan</p>
              <div className={styles.codeBox}>Use code <b>REDRAIL50</b></div>
            </div>
            <img src="https://st.redbus.in/Images/INDOFFER/COVID-19/heroimage2.png" alt="promo" className={styles.promoImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
