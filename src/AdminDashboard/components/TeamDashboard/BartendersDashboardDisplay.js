import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { db } from '../../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { Loader } from 'semantic-ui-react';



import { AddUpdateDataModal } from '../ui/AddUpdateModal/AddUpdateDataModal';
import BartenderDashboardCard from './BartenderDashboardCard';
import classes from './BartendersDashboardDisplay.module.css';

export const BartendersDashboardDisplay = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  // const bartenders = useSelector((state) => state.bartenders.bartenders);
  const addDataModal = useSelector((state) => state.addDataModal.addDataModal);
  const [bartenders, setBartenders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const activeCardHandler = () => {
    // dispatch(activeCardActions.activate());
  };

  useEffect(() => {
    setIsLoading(true);
    const unsub = onSnapshot(
      collection(db, 'bartenders'),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBartenders(list);
        setIsLoading(false);
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
      <h1>Meet Our Team</h1>

      <Link to="modal" state={{ background: location }}></Link>
      <Outlet />

      <div className={classes.card_display_container}>
        {bartenders &&
          bartenders.map((item) => (
            <BartenderDashboardCard
              id={item.id}
              key={item.id}
              img={item.img}
              alt={item.name}
              name={item.name}
              drink={item.drink}
              city={item.city}
              quote={item.quote}
              activateCard={activeCardHandler}
              bartenders={bartenders}
            />
          ))}
      </div>

      {addDataModal && <AddUpdateDataModal />}
    </div>
  );
};

export default BartendersDashboardDisplay;
