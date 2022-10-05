import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

import classes from './ReactCarousel.module.css'

function ReactResponsiveCarousel(props) {
  // const [widthJS, setWidthJS] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 1300 && 33.3);

  window.addEventListener("resize", function () {
    if(this.window.innerWidth > 1300) {
      setWindowWidth(33.3)
    } else {
      setWindowWidth(100)
    }
  })

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