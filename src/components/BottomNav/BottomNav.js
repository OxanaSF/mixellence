import React from 'react';

import classes from './BottomNav.module.css';

const BottomNav = () => {
  return (
    <div className={classes.bottomNav_container}>
      <img
        className={classes.instagram_icon}
        src={`${process.env.PUBLIC_URL}/images/instagram.png`}
        alt=""
      />

      <button className={classes.bottomNav__bookConsultation}>
        Book a Consultation
      </button>
    </div>
  );
};

export default BottomNav;
