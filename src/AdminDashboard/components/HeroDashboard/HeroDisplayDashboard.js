import React from 'react';

import classes from './HeroDisplayDashboard.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero_intro_text}>
        <h1>Mobile Pop-Up Bar</h1>
        <h2>Modern, Fun, Professional, {'&'} Convenient</h2>

        <div className={classes.hero_business_info_wrapper}>
          <img
            className={classes.montereyPin}
            src={`${process.env.PUBLIC_URL}/images/pin_white.png`}
            alt="pin"
          />

          <div className={classes.hero_business_info}>
            <p>Monterey Bay, California</p>
            <p>Native Owned</p>
          </div>
        </div>

        <button className={classes.heroButton}>Book a Consultation</button>
      </div>

      <div className={classes.image_gallery_wrapper}>
        <div className={classes.image_gallery}>
          <img
            src={process.env.PUBLIC_URL + '/images/heroImg/bg1.png'}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + '/images/heroImg/bg2.png'}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + '/images/heroImg/bg3.png'}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + '/images/heroImg/bg4.png'}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + '/images/heroImg/bg5.png'}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + '/images/heroImg/bg6.png'}
            alt=""
          />

          <img
            src={process.env.PUBLIC_URL + '/images/heroImg/bg7.png'}
            alt=""
          />

          <img
            src={process.env.PUBLIC_URL + '/images/heroImg/bg8.png'}
            alt=""
          />

          <img
            src={process.env.PUBLIC_URL + '/images/heroImg/bg9.png'}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
