import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { Loader } from 'semantic-ui-react';

import AddUpdateModal from './AddUpdateModal/AddUpdateModal';
import BartenderDashboardCard from './BartenderDashboardCard';
import classes from './BartendersDashboardDisplay.module.css';

export const BartendersDashboardDisplay = () => {
  const location = useLocation();


  const addDataModal = useSelector((state) => state.addDataModal.addDataModal);
  const [bartenders, setBartenders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

      <Link to="modal" state={{ background: location }}>
        Open Modal
      </Link>
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
            />
          ))}
      </div>

{addDataModal && <AddUpdateModal />}
      
    </div>
  );
};


