import React from 'react';
import styles from './Slider.module.css';

const Card = ({ src }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt="bartender" />
    </div>
  );
};

export default Card;
