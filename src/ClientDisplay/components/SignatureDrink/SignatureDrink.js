import React from 'react';



import drinks from '../../../data/drinks';
import classes from './SignatureDrink.module.css'; 

import Cards from '../../components/Cards/Cards';
import DrinksCard from '../../components/Cards/DrinksCard/DrinksCard';

export default function SignatureDrink() {
  return (
    <main className={classes.SignatureDrink}>
      {/* <PageMarker page="SignatureDrink" /> */}
      <section>
        <Cards>
          {drinks.map((drinks) => (
            <DrinksCard
              key={drinks.id}
              name={drinks.name}
              subtitle={drinks.date}
              img={drinks.image}
              onclick={() => undefined}
            />
          ))}
        </Cards>
      </section>
    </main>
  );
}
