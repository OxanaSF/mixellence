import React from 'react';
// import './SignatureDrink.css';
import './SignatureDrink777.css';
const DrinkCard = ({ id, linkImg, name, quote }) => {

  return (
    <div className="drink-card-container" onInvalid={id}>
      <h3 className="drink-card-top-name">{name}</h3>
      <div className="drink-card-top">
        <img src={linkImg} alt={name} />
      </div>

      <div className="drink-card-bottom">
        <p className="-drink-card-bottom-quote">{quote}</p>
      </div>
    </div>
  );
};

export default DrinkCard;