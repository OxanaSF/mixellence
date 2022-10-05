import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { db } from '../../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

import { ToastContainer } from 'react-toastify';

import { addDataModalActions } from '../../../store/add-data-modal-slice';
import { AddUpdateDataModal } from '../ui/AddUpdateModal/AddUpdateDataModal';
import SignatureDrinkCardDashboard from './SignatureDrinkCardDashboard';


import classes from './SignatureDrinkCardDashboard.module.css';

function SinatureDrinksDisplayDashboard() {
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
    <div>
      <Link to="modal" state={{ background: location }}></Link>
      <Outlet />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />

      <div className={classes.drinks_display_container}>
        {drinks &&
          drinks.map((item) => (
            <SignatureDrinkCardDashboard
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

export default SinatureDrinksDisplayDashboard;
