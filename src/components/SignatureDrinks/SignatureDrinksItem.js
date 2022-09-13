import React from "react";

//styles
import "./SignatureDrinks.css";

function SignatureDrinks() {
  return (
    <div className="SignatureDrinksItem-container">
      <h1 className="SignatureDrinksItem-title">.</h1>
      <div className="SignatureDrinksItem-image-container">
        <img
          className="SignatureDrinksItem-image"
          src={process.env.PUBLIC_URL + "/Public_Images/margarita.png"}
          alt="tea pot"
        />
        <img
          className="SignatureDrinksItem-image"
          src={process.env.PUBLIC_URL + "/Public_Images/paloma.png"}
          alt="one eye"
        />
        <img
          className="SignatureDrinksItem-image"
          src={process.env.PUBLIC_URL + "/Public_Images/mojito.png"}
          alt="tea cup"
        />
      </div>
      <a
        className="SignatureDrinksItem-link"
        href="https://www.instagram.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        .
      </a>
    </div>
  );
}

export default SignatureDrinks;
