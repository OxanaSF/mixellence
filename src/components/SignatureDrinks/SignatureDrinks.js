import React from "react";
import { DRINKS_DATA } from '../../data2/drinks-data';
import classes from './SignatureDrinks.module.css';

function SignatureDrinks() {
  return (
    <section className={classes.signatureDrinks__container} id="drinks">
      <h1>Signature Drinks</h1>
    <div className={classes.signatureDrinksItem__container}>
      <div className={classes.signatureDrinksItem__container}>
        <img className={classes.signatureDrinksItem__Img} src={`${process.env.PUBLIC_URL}/images/drinksImg/margarita.png`} alt="" />
        <img className={classes.signatureDrinksItem__Img} src={`${process.env.PUBLIC_URL}/images/drinksImg/paloma.png`} alt="" />
        <img className={classes.signatureDrinksItem__Img} src={`${process.env.PUBLIC_URL}/images/drinksImg/mojito.png`} alt="" />
      </div>
      <a className={classes.signatureDrinksItem__Link} href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank" ></a>
    </div>
    </section>
  );
}

export default SignatureDrinks;

