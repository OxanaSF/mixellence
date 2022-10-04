import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { db } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';

import { addDataModalActions } from '../../../store/add-data-modal-slice';
import { AddUpdateDataModal } from '../../../AdminDashboard/components/ui/AddUpdateModal/AddUpdateDataModal';
import SignatureDrinkCard from './SignatureDrinkCard';

import classes from './SignatureDrinks.module.css';

function SinatureDrinksDisplay() {
  const location = useLocation();

  const dispatch = useDispatch();

  const addDataModal = useSelector((state) => state.addDataModal.addDataModal);

  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(addDataModalActions.updateReturnLink('/drinks-dashboard'));
    const unsub = onSnapshot(
      collection(db, 'drinks'),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setDrinks(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className={classes.drinks_wrapper}>
     <h2>Signature Drinks</h2>

      <div className={classes.drinks_display_container}>
        {drinks &&
          drinks.map((item) => (
            <SignatureDrinkCard
              id={item.id}
              key={item.id}
              img={item.img}
              alt={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>

      {addDataModal && <AddUpdateDataModal />}
    </div>
  );
}

export default SinatureDrinksDisplay;
