import React from 'react';

import classes from './DrinksCard.module.css';

export default function DrinksCard({ name, subtitle, img, onclick }) {
  return (
    <article className={classes.drinksCard} onClick={onclick}>
      <div className={classes.cardImg}>
        <img src={img} alt={name} />
      </div>
      <div className={classes.cardBody}>
        <h1>{name}</h1>
        <h2>{subtitle}</h2>
      </div>
    </article>
  );
}
