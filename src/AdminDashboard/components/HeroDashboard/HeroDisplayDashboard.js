import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { db } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';

import HeroCardDashboard from './HeroCardDashboard';
import { addDataModalActions } from '../../../store/add-data-modal-slice';
import { AddUpdateDataModal } from '../ui/AddUpdateModal/AddUpdateDataModal';

import classes from './HeroDisplayDashboard.module.css';

const HeroDisplayDashboard = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const addDataModal = useSelector((state) => state.addDataModal.addDataModal);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(addDataModalActions.updateReturnLink('/hero-dashboard'));
    const unsub = onSnapshot(
      collection(db, 'bgImages'),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
          list.sort(function (first_el, second_el) {
            if (+first_el.num < +second_el.num) return -1;
            else if (+first_el.num > +second_el.num) return 1;
            else if (+first_el.num === +second_el.num) return 0;
          });
        });
        setImages(list);
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
    <section className={classes.hero}>
      <Link to="modal" state={{ background: location }}></Link>
      <Outlet />

      <div className={classes.hero_intro_text}>
        <h1>Mobile Pop-Up Bar</h1>
        <h2>Modern, Fun, Professional, {'&'} Convenient</h2>

        <div className={classes.hero_business_info_wrapper}>
          <img
            className={classes.montereyPin}
            src={`${process.env.PUBLIC_URL}/images/pin_white.png`}
            alt="pin"
          />

          <div className={classes.hero_business_info}>
            <p>Monterey Bay, California</p>
            <p>Native Owned</p>
          </div>
        </div>

        <button className={classes.heroButton}>Book a Consultation</button>
      </div>

      <div className={classes.image_gallery_wrapper}>
        <div className={classes.image_gallery}>
          {images && images.map((item) => 
         <HeroCardDashboard key={item.id} id={item.id} img={item.img} />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroDisplayDashboard;
