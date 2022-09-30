import React from 'react';

import classes from './HeroDisplayDashboard.module.css';
// import HeroBtn from '../../../ClientDisplay/components/Hero/Hero';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero_intro_text}>
        <h1>Mobile Pop-Up Bar</h1>
        <h2>Modern, Fun, Professional, {'&'} Convenient</h2>

        <div className={classes.hero_business_info_wrapper}>
          <img 
          className={classes.montereyPin}
          src={`${process.env.PUBLIC_URL}/images/pin.png`} alt='pin'/>

          <div className={classes.hero_business_info}>
            <p>Monterey Bay, California</p>
            <p>Native Owned</p>
          </div>
        </div>

        <button className={classes.heroButton}>Book a Consultation</button>
      </div>

      <div className={classes.heroGalleryWrapper}>
        GALLERY
        {/* <div
          className={`${classes.image1} ${classes.bgImg}`}
          src={process.env.PUBLIC_URL + '/images/heroImg/bg1.png'}
          alt=""
        ></div>
        <div
          className={`${classes.image2} ${classes.bgImg}`}
          src={process.env.PUBLIC_URL + '/images/heroImg/bg2.png'}
          alt=""
        ></div>
        <div
          className={`${classes.image3} ${classes.bgImg}`}
          src={process.env.PUBLIC_URL + '/images/heroImg/bg3.png'}
          alt=""
        ></div>
        <div
          className={`${classes.image4} ${classes.bgImg}`}
          src={process.env.PUBLIC_URL + '/images/heroImg/bg4.png'}
          alt=""
        ></div>
        <div
          className={`${classes.image5} ${classes.bgImg}`}
          src={process.env.PUBLIC_URL + '/images/heroImg/bg5.png'}
          alt=""
        ></div>
        <div
          className={`${classes.image6} ${classes.bgImg}`}
          src={process.env.PUBLIC_URL + '/images/heroImg/bg6.png'}
          alt=""
        ></div>
        <div
          className={`${classes.image7} ${classes.bgImg}`}
          src={process.env.PUBLIC_URL + '/images/heroImg/bg7.png'}
          alt=""
        ></div>
        <div
          className={`${classes.image8} ${classes.bgImg}`}
          src={process.env.PUBLIC_URL + '/images/heroImg/bg8.png'}
          alt=""
        ></div>
        <div
          className={`${classes.image9} ${classes.bgImg}`}
          src={process.env.PUBLIC_URL + '/images/heroImg/bg9.png'}
          alt=""
        ></div> */}
      </div>
    </section>
  );
};

export default Hero;
