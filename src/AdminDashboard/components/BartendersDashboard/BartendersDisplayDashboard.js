import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { db } from '../../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { Loader } from 'semantic-ui-react';

import { ToastContainer } from 'react-toastify';

import { addDataModalActions } from '../../../store/add-data-modal-slice';
import { AddUpdateDataModal } from '../ui/AddUpdateModal/AddUpdateDataModal';
import BartenderCardDashboard from './BartenderCardDashboard';
import classes from './BartendersDisplayDashboard.module.css';
import ReactResponsiveCarousel from '../TestimonialsDashboard/ReactResponsiveCarousel';

export const BartendersDisplayDashboard = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const addDataModal = useSelector((state) => state.addDataModal.addDataModal);

  const [bartenders, setBartenders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(addDataModalActions.updateReturnLink('/team-dashboard'));
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
    <div className={classes.card_display_wrapper}>
      <h1>Meet Our Team</h1>

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

      <div className={classes.card_display_container}>
        <ReactResponsiveCarousel>
          {bartenders &&
            bartenders.map((item) => (
              <BartenderCardDashboard
                id={item.id}
                key={item.id}
                img={item.img}
                alt={item.name}
                name={item.name}
                drink={item.drink}
                city={item.city}
                quote={item.quote}
                bartenders={bartenders}
              />
            ))}
        </ReactResponsiveCarousel>
      </div>

      {addDataModal && <AddUpdateDataModal />}
    </div>
  );
};

export default BartendersDisplayDashboard;
