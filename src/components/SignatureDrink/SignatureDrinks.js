import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import DrinkCard from './DrinkCard';
import './SignatureDrink.css';
import { DRINKS } from '../../data2/drinks';

function SignatureDrinks() {
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       backgroundColor: 'white',
    //       borderRadius: '10px',
    //       padding: '20px',
    //     }}
    //   >
    //     <ul style={{ margin: '0px' }}> {dots} </ul>
    //   </div>
    // ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
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
        {DRINKS.map((item) => (
          <DrinkCard
            key={item.id}
            linkImg={item.linkImg}
            alt={item.name}
            name={item.name}
            quote={item.quote}
          />
        ))}
      </Slider>
    </div>
  );
}

export default SignatureDrinks;
