import React from 'react'

import classes from './Hero.module.css'


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
        <h2>Mobile Pop-Up Bar</h2>
        <h1>Modern, Fun, Professional, {"&"} Convenient</h1>
        <h3>Monterey Bay, California</h3>
        <h3>Native Owned</h3>
        <button>Book a Consultation</button>
      </div>
    </section>
  )
}

export default Hero