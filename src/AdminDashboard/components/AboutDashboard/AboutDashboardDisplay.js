import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { addDataModalActions } from '../../../store/add-data-modal-slice';
import { Loader } from 'semantic-ui-react';
import classes from '../../../ClientDisplay/components/About/About.module.css';
// import EditDataContainer from '../ui/AddEditDelete/EditDataContainer';
import EditData from '../ui/AddEditDelete/EditData';

const AboutDashboardDisplay = () => {
  const [aboutInfo, setAboutInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    dispatch(addDataModalActions.updateReturnLink('/about-dashboard'));
    const unsub = onSnapshot(
      collection(db, 'about'),
      (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setAboutInfo({ id: doc.id, ...doc.data() });
        });
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

  const updateDataHandler = () => {
    dispatch(addDataModalActions.open());
  };

  return (
    <section className={classes.about__container} id="about">
      <h2>About Us</h2>
      <Link to="modal" state={{ background: location }}></Link>
      <Outlet />

      <EditData
        onClick={updateDataHandler}
        navigate={`/about-dashboard/${aboutInfo.id}/modal`}
      />

      {isLoading ? (
        <Loader active inline="centered" size="huge" />
      ) : (
        <>
          <div className={classes.about_info_wrapper}>
            <div className={classes.about__info}>
              <p className={classes.par1}>{aboutInfo.text1}</p>

              <p className={classes.par2}>{aboutInfo.text2}</p>

              <footer className={classes.about__footer}>
                <div className={classes.about__footer__location}>
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/pin.png`}
                      alt="pin"
                    />
                  </div>
                  <div>{aboutInfo.city}</div>
                </div>

                <div>{aboutInfo.text3}</div>
              </footer>
            </div>
          </div>
        </>
      )}

      <div className={classes.img}>
        <img
          className={classes.barImg}
          src={`${process.env.PUBLIC_URL}/images/bar.png`}
          alt="bar"
        />
      </div>
    </section>
  );
};

export default AboutDashboardDisplay;
