import React from 'react'

import classes from './Hero.module.css'
import HeroBtn from './HeroBtn';

const Hero = () => {

  return (
    <section className={classes.hero}>
      <div className={classes.row}>
        <div className={classes.column}>
          <img className={classes.image1} src={process.env.PUBLIC_URL + '/images/heroImg/bg1.png'} alt="" />
          <img className={classes.image1} src={process.env.PUBLIC_URL + '/images/heroImg/bg2.png'} alt="" />
          <img className={classes.image1} src={process.env.PUBLIC_URL + '/images/heroImg/bg3.png'} alt="" />
        </div>
        <div className={classes.column}>
          <img src={process.env.PUBLIC_URL + '/images/heroImg/bg4.png'} alt="" />
          <img src={process.env.PUBLIC_URL + '/images/heroImg/bg5.png'} alt="" />
        </div>
        <div className={classes.column}>
          <img src={process.env.PUBLIC_URL + '/images/heroImg/bg6.png'} alt="" />
          <img src={process.env.PUBLIC_URL + '/images/heroImg/bg7.png'} alt="" />
        </div>
        <div className={classes.column}>
          <img src={process.env.PUBLIC_URL + '/images/heroImg/bg8.png'} alt="" />
          <img src={process.env.PUBLIC_URL + '/images/heroImg/bg9.png'} alt="" />
        </div>
      </div>
      <div className={classes.overlay}>
        <h2 className={classes.overlayHeaderText}>Mobile Pop-Up Bar</h2>
        <h1>Modern, Fun, Professional, {"&"} Convenient</h1>
        <h3 className={classes.monterey}> <img className={classes.montereyPin} src={process.env.PUBLIC_URL + '/images/pin.png'} alt="" />Monterey Bay, California</h3>
        <h3>Native Owned</h3>
        <HeroBtn text="Book a Consultation" />
      </div>
    </section>
  )
}

export default Hero



{/* REFERENCE FOR ACTIVATING MODAL */ }
{/* <div onClick={() => setModal(!modal)} style={{padding: "10px"}}>
</div> */}