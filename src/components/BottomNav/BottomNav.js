import React from 'react';

import classes from './BottomNav.module.css';

const BottomNav = () => {
  return (
    <div className={classes.bottomNav_container}>
      <img className={classes.instagram_icon} src={`${process.env.PUBLIC_URL}/images/instagram.png`} alt="" />
      <div className={classes.instagram_icon}>Instagram Icon</div>
      <div>Book a Consultation</div>
    </div>
  );
};

export default BottomNav;
