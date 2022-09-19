import React from 'react';
import { useNavigate } from 'react-router-dom';

import './MeetOurTeemSlider.css';

const BartenderCard = ({
  id,
  img,
  name,
  drink,
  city,
  quote,
  deleteBartender,
  setDeketeBartender,
}) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <button onClick={() => navigate(`/update-bartender/${id}`)}>
        Add or Update
      </button>
      <button>Delete</button>
      <div className="card-top">
        <img src={img} alt={name} />
      </div>

      <div className="card-bottom">
        <h3 className="card-bottom-name">{name}</h3>
        <h3 className="card-bottom-drink">{drink}</h3>
        <h3 className="card-bottom-address">{city}</h3>
        <p className="card-bottom-quote">{quote}</p>
      </div>
    </div>
  );
};

export default BartenderCard;
