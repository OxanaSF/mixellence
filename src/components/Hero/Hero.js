import React from 'react'

import classes from './Hero.module.css'
import bg1 from './heroImages/bg1.png'
import bg2 from './heroImages/bg2.png'
import bg3 from './heroImages/bg3.png'
import bg4 from './heroImages/bg4.png'
import bg5 from './heroImages/bg5.png'
import bg6 from './heroImages/bg6.png'
import bg7 from './heroImages/bg7.png'
import bg8 from './heroImages/bg8.png'
import bg9 from './heroImages/bg9.png'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.row}>
        <div className={classes.column}>
          <img className={classes.image1} src={bg1} alt="" />
          <img className={classes.image1} src={bg2} alt="" />
          <img className={classes.image1} src={bg3} alt="" />
        </div>
        <div className={classes.column}>
          <img src={bg4} alt="" />
          <img src={bg5} alt="" />
        </div>
        <div className={classes.column}>
          <img src={bg6} alt="" />
          <img src={bg7} alt="" />
        </div>
        <div className={classes.column}>
          <img src={bg8} alt="" />
          <img src={bg9} alt="" />
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