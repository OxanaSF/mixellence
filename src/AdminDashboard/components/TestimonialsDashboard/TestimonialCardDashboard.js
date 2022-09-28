import React from 'react';
import classes from './TestimonialCardDashboard.module.css';

const TestimonialCardDashboard = ({ id, linkImg, name, text, rating }) => {
  const num = +rating;

  return (
    <div className={classes.testimonial_card} onInvalid={id}>
      <div className={classes.card_info}>
        <p className={classes.text}> {text}</p>

        <div>
          <div className={classes.stars}>
            {[...Array(num)].map((el, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}/images/pointed-star.png`}
                alt="star"
              />
            ))}
          </div>
          <p className={classes.card_name}>{name}</p>
        </div>
      </div>

      <div className={classes.card_img}>
        <img src={linkImg} alt={name} />
      </div>
    </div>
  );
};

export default TestimonialCardDashboard;
