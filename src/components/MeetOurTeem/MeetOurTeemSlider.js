import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BartenderCard from './BartenderCard';
import './MeetOurTeemSlider.css';
import { BARTENDERS } from '../../data/bartenders';

function MeetOurTeemSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'none', background: 'red' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'none', background: 'green' }}
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
        {BARTENDERS.map((item) => (
          <BartenderCard
            key={item.id}
            linkImg={item.linkImg}
            alt={item.name}
            name={item.name}
            drink={item.drink}
            city={item.city}
            quote={item.quote}
          />
        ))}
      </Slider>
    </div>
  );
}

export default MeetOurTeemSlider;
