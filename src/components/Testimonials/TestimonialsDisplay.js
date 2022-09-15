import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import TestimonialCard from './TestimonialCard';
import './Testimonials.css';
import {TESTIMONIALS} from '../../data/testimonials'



function TestimonialsDisplay() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    
      
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1574,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {TESTIMONIALS.map((item) => (
          <TestimonialCard
            key={item.id}
            linkImg={item.linkImg}
            alt={item.name}
            name={item.name}
            text={item.text}
          />
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialsDisplay;
