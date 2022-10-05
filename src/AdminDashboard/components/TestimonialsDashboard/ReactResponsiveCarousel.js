import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

import classes from './ReactCarousel.module.css'

function ReactResponsiveCarousel(props) {
  // const [widthJS, setWidthJS] = useState(0);
  const [windowWidth, setWindowWidth] = useState(100);

  window.addEventListener("resize", function () {
    if(this.window.innerWidth > 1300) {
      setWindowWidth(33.3)
    } else {
      setWindowWidth(100)
    }
  })

  // useEffect(() => {
    // if (widthJS > 1100) {
    //   setWindowWidth(33.3);
    // } else {
    //   setWindowWidth(100);
    // }
    // console.log(widthJS)
  // }, [widthJS])

  return (
    <Carousel
      showThumbs={false}
      // infiniteLoop={true}
      showArrows={false}
      emulateTouch={true}
      centerSlidePercentage={windowWidth}
      centerMode={true}
      showStatus={false}
      className={classes.carousel}
    >
      {props.children}
    </Carousel>
  )
}

export default ReactResponsiveCarousel