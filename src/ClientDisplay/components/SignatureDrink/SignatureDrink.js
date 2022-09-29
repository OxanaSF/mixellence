import React from 'react';

import  drinks from '../../../data/drinks';

import classes from './SignatureDrink.module.css';

import SignatureTitle from '../../components/ui/SignatureTitle/SignatureTitle';

import Cards from '../../components/SignatureDrink/Cards/Cards';
import DrinksCard from '../../components/SignatureDrink/DrinksCard';

export default function SignatureDrink() {
  return (
    <main className={classes.SignatureDrink}>
       <SignatureTitle page="SignatureDrinks" /> 
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

