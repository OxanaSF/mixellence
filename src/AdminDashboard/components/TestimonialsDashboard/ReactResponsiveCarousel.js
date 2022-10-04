import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

import classes from './ReactCarousel.module.css'

function ReactResponsiveCarousel(props) {
  return (
    <Carousel
      infiniteLoop={true}
      showArrows={false}
      emulateTouch={true}
      showStatus={false}
      className={classes.carousel}
    >
      {props.children}
    </Carousel>
  )
}

export default ReactResponsiveCarousel