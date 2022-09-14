import React from 'react'

import classes from './Gallery.module.css'

const Gallery = () => {
  return (
    <section className={classes.gallery}>
      <div className={classes.pic1}></div>
      <div className={classes.pic2}></div>
      <div className={classes.pic3}></div>
      <div className={classes.pic4}></div>
      <div className={classes.pic5}></div>
      <div className={classes.pic6}></div>
      <div className={classes.pic7}></div>

      {/* <div className={classes.row}>
        <div className={classes.column}>
          <img src={`${process.env.PUBLIC_URL}/images/galleryImg/1.gif`}
            alt="" />
          <img src={`${process.env.PUBLIC_URL}/images/galleryImg/2.gif`}
            alt="" />
        </div>
        <div className={classes.column}>
          <img src={`${process.env.PUBLIC_URL}/images/galleryImg/3.gif`}
            alt="" />
          <img src={`${process.env.PUBLIC_URL}/images/galleryImg/4.gif`}
            alt="" />
        </div>
      </div> */}
      {/* <div className={classes.overlay}>
        <h1>Bringing professionalism, excellence, {"&"} fun to every event.</h1>
      </div> */}
    </section>
  )
}

export default Gallery