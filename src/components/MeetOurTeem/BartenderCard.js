import React, { useState } from 'react';
import './MeetOurTeemSlider.css';

const Card = ({ id, linkImg, name, drink, city, quote }) => {
  const [display, setDisplay] = useState(false)


  return (
    <div className="card" onInvalid={id}>
      <div className="card-top">
        <img src={linkImg} alt={name} />
      </div>

      <div className="card-bottom">
        <h3 className="card-bottom-name">{name}</h3>
        <h3 className="card-bottom-drink">{drink}</h3>
        <h3 className="card-bottom-address">{city}</h3>
        <p className="card-bottom-quote">{quote}</p>
      </div>
    </div>
  );
};

export default Card;
