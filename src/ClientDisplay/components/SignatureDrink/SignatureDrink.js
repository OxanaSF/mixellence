import React from 'react';

import  drinks from '../../../data/drinks';
import classes from './SignatureDrink.module.css';
 
import PageMarker from '../../components/PageMarker/PageMarker';
import Cards from '../../components/Cards/Cards';
import DrinksCard from '../../components/Cards/DrinksCard/DrinksCard';

export default function SignatureDrink() {
  return (
    <main className={classes.SignatureDrinks}>
      <PageMarker page="SignatureDrinks" />
      <section>
        <Cards>
          {drinks.map((drinks) => (
            <DrinksCard
              key={drinks.id}
              name={drinks.name}
              subtitle={drinks.quote}
              img={drinks.image}
              onClick={() => undefined}
            />
          ))}
        </Cards>
      </section>
    </main>
  );
}

