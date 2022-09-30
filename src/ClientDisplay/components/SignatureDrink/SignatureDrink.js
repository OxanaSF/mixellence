import React from 'react';

import  drinks from '../../../data/drinks';
import classes from './SignatureDrink.module.css';

import SignatureTitle from '../../components/SignatureDrink/SignatureTitle/SignatureTitle';


import Cards from '../../components/SignatureDrink/Cards/Cards';
import DrinksCard from '../../components/SignatureDrink/DrinksCard';

export default function SignatureDrink() {
  return (
    <main className={classes.SignatureDrink}>
       {/* <SignatureTitle page="SignatureDrinks" />  */}
       <h2>Signature Drinks</h2>
      <section>
        <Cards>
          {drinks.map((drinks) => (
            <DrinksCard
              key={drinks.id}
              name={drinks.name}
              description={drinks.quote}
              img={drinks.image}
              onClick={() => undefined}
            />
          ))}
        </Cards>
      </section>
    </main>
  );
}

