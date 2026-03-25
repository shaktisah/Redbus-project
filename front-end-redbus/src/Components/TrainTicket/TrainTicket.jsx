import React from 'react';
import TrainHero from './TrainHero';
import TrainFeatures from './TrainFeatures';

const TrainTicket = () => {
  return (
    <div style={{ backgroundColor: '#f1f1f1', minHeight: '100vh', paddingBottom: '50px' }}>
      <TrainHero />
      <TrainFeatures />
    </div>
  );
};

export default TrainTicket;
