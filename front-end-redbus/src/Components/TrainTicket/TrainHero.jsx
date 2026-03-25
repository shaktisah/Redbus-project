import React, { useState } from 'react';
import styles from './TrainHero.module.css';

const TrainHero = () => {
  const [activeTab, setActiveTab] = useState('book');

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>Train Ticket Booking</h1>
          <div className={styles.irctcBadge}>
            <img src="https://st.redbus.in/web/images/trains/irctc-logo.svg" alt="IRCTC" />
            <span>IRCTC Authorized Partner</span>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="https://st.redbus.in/web/images/trains/redrail_illus.svg" alt="Train Illustration" />
        </div>
      </div>

      <div className={styles.searchCard}>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input 
              type="radio" 
              name="mode" 
              checked={activeTab === 'book'} 
              onChange={() => setActiveTab('book')} 
            />
            <span className={styles.radioText}>Book Train Tickets</span>
          </label>
          <label className={styles.radioLabel}>
            <input 
              type="radio" 
              name="mode" 
              checked={activeTab === 'pnr'} 
              onChange={() => setActiveTab('pnr')} 
            />
            <span className={styles.radioText}>Check PNR Status</span>
          </label>
          <label className={styles.radioLabel}>
            <input 
              type="radio" 
              name="mode" 
              checked={activeTab === 'live'} 
              onChange={() => setActiveTab('live')} 
            />
            <span className={styles.radioText}>Live Train Status</span>
          </label>
        </div>

        {activeTab === 'book' && (
          <div className={styles.searchInputs}>
            <div className={styles.inputBox}>
              <div className={styles.iconTrain}></div>
              <div>
                <div className={styles.label}>From</div>
                <input className={styles.cleanInput} placeholder="Source Station" />
              </div>
            </div>

            <div className={styles.iconReverse}>⮂</div>

            <div className={styles.inputBox}>
              <div className={styles.iconTrainDest}></div>
              <div>
                <div className={styles.label}>To</div>
                <input className={styles.cleanInput} placeholder="Destination Station" />
              </div>
            </div>

            <div className={styles.inputBox}>
              <div className={styles.iconCalendar}></div>
              <div>
                <div className={styles.label}>Date</div>
                <input type="date" className={styles.cleanInput} />
              </div>
            </div>
            
            <div className={styles.optInBox}>
              <div className={styles.checkboxWrapper}>
                <input type="checkbox" id="freeCancel" />
                <label htmlFor="freeCancel">Opt-in for <b>Free Cancellation</b></label>
              </div>
            </div>
          </div>
        )}

        <button className={styles.searchBtn}>
          {activeTab === 'book' ? 'Search Trains' : 'Check Status'}
        </button>
      </div>
    </div>
  );
};

export default TrainHero;
