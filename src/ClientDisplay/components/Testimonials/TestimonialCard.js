import React from 'react';
import './Testimonials.css';

const TestimonialCard = ({ id, linkImg, name, text }) => {
  return (
    <div className="testimonial-card" onInvalid={id}>
      <div className="card-info">
        
          <p className="text"> {text}</p>
     
        <div>
          <div className="stars">
            <img  src={`${process.env.PUBLIC_URL}/images/pointed-star.png`} alt="star" />
            <img  src={`${process.env.PUBLIC_URL}/images/pointed-star.png`} alt="star" />
            <img  src={`${process.env.PUBLIC_URL}/images/pointed-star.png`} alt="star" />
            <img  src={`${process.env.PUBLIC_URL}/images/pointed-star.png`} alt="star" />
            <img  src={`${process.env.PUBLIC_URL}/images/pointed-star.png`} alt="star" />
          </div>
          <p className="card-name">{name}</p>
        </div>
      </div>

      <div className="card-img">
        <img src={linkImg} alt={name} />
      </div>
    </div>
  );
};

export default TestimonialCard;
