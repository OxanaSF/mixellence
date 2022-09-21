import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

import './MeetOurTeemSlider.css';

const BartenderCard = ({ id, img, name, drink, city, quote }) => {
  const navigate = useNavigate();

  const deleteBartender = async (id) => {
    await deleteDoc(doc(db, 'bartenders', id));
  };

  return (
    <div className="card">
      <button onClick={() => navigate('/add-bartender')}>Add</button>
      <button onClick={() => navigate(`/update-bartender/${id}`)}>
        Add or Update
      </button>
      <button onClick={() => deleteBartender(id)}>Delete</button>
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
