import React from 'react'

import classes from './Gallery.module.css'

const Gallery = () => {
  return (
    <section className={classes.gallery}> {/* The gallery section underneath signature drinks */}
      <div className={`${classes.pic1} ${classes.bgImg}`}></div> {/* Top Left image */}
      <div className={`${classes.pic2} ${classes.bgImg}`}></div> {/* Bottom Left image */}
      <div className={`${classes.pic3} ${classes.bgImg}`}></div> {/* Second from Bottom Left image */}
      <div className={`${classes.pic4} ${classes.bgImg}`}></div> {/* Big Center image */}
      <div className={`${classes.pic5} ${classes.bgImg}`}></div> {/* Top Right image */}
      <div className={`${classes.pic6} ${classes.bgImg}`}></div> {/* Second from Bottom Right image */}
      <div className={`${classes.pic7} ${classes.bgImg}`}></div> {/* Bottom Right image */}
      <div className={classes.overlay}>
        <h1>Bringing professionalism, excellence, {"&"} fun to every event.</h1>
      </div>
    </section>
  )
}

export default Gallery