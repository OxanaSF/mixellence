import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './MeetOurTeemSlider.css';
import { BARTENDERS } from '../../data/bartenders';

function MeetOurTeemSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        },
      },
    ],
  };

  return (
    <div className="test">
      <Slider {...settings}>
        {BARTENDERS.map((item) => (
          <div className="card" onInvalid={item.id}>
            
            <div className="card-top">
              <img src={item.linkImg} alt={item.name} />
            </div>

            <div className="card-bottom">
              <h3 className='card-bottom-name'>{item.name}</h3>
              <h3 className='card-bottom-drink'>{item.drink}</h3>
              <h3 className='card-bottom-address'>{item.city}</h3>
              <p className='card-bottom-quote'>{item.quote}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MeetOurTeemSlider;
