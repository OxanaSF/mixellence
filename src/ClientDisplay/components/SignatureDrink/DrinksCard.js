import React from 'react';

import classes from './DrinksCard.module.css';

export default function DrinksCard({ name, description, img, onclick }) {
  return (
    <section className={classes.drinksCard} onClick={onclick}>
      <div className={classes.card_header}>
        <h3>{name}</h3>
      </div>

      {/* <div className={classes.cardImg}> */}
        <img src={img} alt={name} />
      {/* </div> */}

      {/* <div className={classes.cardBody}>
        <p>{subtitle}</p>
      </div> */}

      <div className={classes.card_description}>
        <p >{description}</p>
      </div>


    </section>
  );
}
