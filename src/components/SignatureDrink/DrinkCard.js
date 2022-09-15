import React from 'react';
// import './SignatureDrink.css';
import './SignatureDrink777.css';
const Card = ({ id, linkImg, name, quote }) => {

  return (
    <div className="drink-card-container" onInvalid={id}>
      <div className="drink-card-top">
        <img src={linkImg} alt={name} />
      </div>

      <div className="card-bottom">
        <h3 className="card-bottom-name">{name}</h3>
      
        <p className="card-bottom-quote">{quote}</p>
      </div>
    </div>
  );
};

export default Card;
