import React from 'react';

import { DRINKS } from '../../../data/drinks'

// import classes from './SignatureDrinks.module.css';

import DrinkCard from './DrinkCard';

function SignatureDrinks() {


  const settings = {
    
  };

  return (
    <div className="container">
      <div {...settings}>
        {DRINKS.map((item) => (
          <DrinkCard
            key={item.id}
            linkImg={item.linkImg}
            alt={item.name}
            name={item.name}
            quote={item.quote}
          />
        ))}
      </div>
    </div>
  );
}

export default SignatureDrinks;
