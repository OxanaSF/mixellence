import React from "react";

//styles
import "./SignatureDrinks.css";

function SignatureDrinks() {
  return (
    <div className="SignatureDrinksItem-container">
      <h1 className="SignatureDrinksItem-title"></h1>
      <div className="SignatureDrinksItem-image-container">
        <img
          className="SignatureDrinksItem-image"
          src={`${process.env.PUBLIC_URL}/images/drinksImg/margarita.png`}

          alt=""
        />
        <img
          className="SignatureDrinksItem-image"
          src={`${process.env.PUBLIC_URL}/images/drinksImg/paloma.png`}
          
          alt=""
        />
        <img
          className="SignatureDrinksItem-image"
          src={`${process.env.PUBLIC_URL}/images/drinksImg/mojito.png`}
          

          alt=""
        />
      </div>
      <a
        className="SignatureDrinksItem-link"
        href="https://www.instagram.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        
      </a>
    </div>
  );
}

export default SignatureDrinks;
