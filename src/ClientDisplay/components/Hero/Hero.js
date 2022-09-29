import React from 'react'

import classes from './Hero.module.css'
import HeroBtn from './HeroBtn';

const Hero = () => {

  return (
    <section className={classes.hero}>
      <div className={classes.heroGalleryWrapper}>
        <div className={`${classes.image1} ${classes.bgImg}`} src={process.env.PUBLIC_URL + '/images/heroImg/bg1.png'} alt="" ></div>
        <div className={`${classes.image2} ${classes.bgImg}`} src={process.env.PUBLIC_URL + '/images/heroImg/bg2.png'} alt="" ></div>
        <div className={`${classes.image3} ${classes.bgImg}`} src={process.env.PUBLIC_URL + '/images/heroImg/bg3.png'} alt="" ></div>
        <div className={`${classes.image4} ${classes.bgImg}`} src={process.env.PUBLIC_URL + '/images/heroImg/bg4.png'} alt="" ></div>
        <div className={`${classes.image5} ${classes.bgImg}`} src={process.env.PUBLIC_URL + '/images/heroImg/bg5.png'} alt="" ></div>
        <div className={`${classes.image6} ${classes.bgImg}`} src={process.env.PUBLIC_URL + '/images/heroImg/bg6.png'} alt="" ></div>
        <div className={`${classes.image7} ${classes.bgImg}`} src={process.env.PUBLIC_URL + '/images/heroImg/bg7.png'} alt="" ></div>
        <div className={`${classes.image8} ${classes.bgImg}`} src={process.env.PUBLIC_URL + '/images/heroImg/bg8.png'} alt="" ></div>
        <div className={`${classes.image9} ${classes.bgImg}`} src={process.env.PUBLIC_URL + '/images/heroImg/bg9.png'} alt="" ></div>
      </div>
      {/* <div className={classes.overlay}>
        <h2 className={classes.overlayHeaderText}>Mobile Pop-Up Bar</h2>
        <h1>Modern, Fun, Professional, {"&"} Convenient</h1>
        <h3 className={classes.monterey}> <img className={classes.montereyPin} src={process.env.PUBLIC_URL + '/images/pin.png'} alt="" />Monterey Bay, California</h3>
        <h3 className={classes.native}>Native Owned</h3>
        <HeroBtn text="Book a Consultation" />
      </div> */}
    </section>
  )
}

export default Hero