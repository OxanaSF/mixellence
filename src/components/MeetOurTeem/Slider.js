import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import './Slider.css'

const Test = () => {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
  };

  return (
    <section className='slider-container'>
    <Slider {...settings} className='slider'>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={`${process.env.PUBLIC_URL}/images/bartender1.png`} alt="bartender" />
          </div>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={`${process.env.PUBLIC_URL}/images/bartender2.png`} alt="bartender" />
          </div>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={`${process.env.PUBLIC_URL}/images/bartender3.png`} alt="bartender" />
          </div>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={`${process.env.PUBLIC_URL}/images/bartender4.png`} alt="bartender" />
          </div>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={`${process.env.PUBLIC_URL}/images/bartender5.png`} alt="bartender" />
          </div>
        </div>
      </div>
    </Slider>
    </section>
  );
};

export default Test;
