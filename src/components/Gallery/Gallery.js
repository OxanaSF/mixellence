import React from 'react'
import classes from './Gallery.module.css'

import bg1 from './galleryImages/1.gif'
import bg2 from './galleryImages/2.gif'
import bg3 from './galleryImages/3.gif'
import bg4 from './galleryImages/4.gif'
import bg5 from './galleryImages/5.gif'
import bg6 from './galleryImages/6.gif'
import bg7 from './galleryImages/7.gif'

const Gallery = () => {
  return (
    <section className={classes.gallery}>
      <div className={classes.row}>
        <div className={classes.column}>
          <img className={classes.image} src={bg1} alt="" />
          <img className={classes.image2} src={bg2} alt="" />
          <img src={bg3} alt="" />
        </div>
      </div>
      <div className={classes.overlay}>
        <h1>Bringing professionalism, excellence, {"&"} fun to every event.</h1>
      </div>
    </section>
  )
}

export default Gallery