import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { Link, Outlet, useLocation } from 'react-router-dom';


import { addDataModalActions } from '../../../store/add-data-modal-slice';
import { AddUpdateDataModal } from '../../../AdminDashboard/components/ui/AddUpdateModal/AddUpdateDataModal';
import EditData from '../../../AdminDashboard/components/ui/AddEditDelete/EditData';

import classes from './Services.module.css';


const Services = () => {
  const addDataModal = useSelector((state) => state.addDataModal.addDataModal);
  const activeServiceDashboard = useSelector(
    (state) => state.activateServicesDashboard.activateServicesDashboard
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);


 

  useEffect(() => {
    setLoading(true);
    dispatch(addDataModalActions.updateReturnLink('/services-dashboard'));
    const unsub = onSnapshot(
      collection(db, 'services'),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          // console.log('doc.id', doc.id);
          list.push({ id: doc.id, ...doc.data() });
        });
        setServices(list);
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


  const updateDataHandler = (id) => {
    console.log('onClick');
    // navigate(`/services-dashboard/${id}/modal`)
  };



  return (
    <section className={classes.services__container} id="services">
      <h2>Services</h2>
      <Link to="modal" state={{ background: location }}></Link>
      <Outlet />

      

      <div className={classes.services__main}>
        {services
          .filter((item) => item.id === '9EMmwb87lJ4Jyqjq01vu')
          .map((service) => (
            <div key={service.id}>
              <div className={classes.service__item__container}>
                <header
                  className={`${classes.service__item__header} ${classes.service__item__header__tear1} `}
                >
                  {activeServiceDashboard && (
                    <div 
                      className={classes.service_update_btn1}
                      onClick={updateDataHandler(service.id)}
            
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/pen_white.png`}
                        alt="draw"
                      />
                    </div>
                  )}

                  <h3>{service.title}</h3>
                  <p>{service.description}</p> 
                </header>

                <div className={[classes.className]}>
                  <div
                    className={`${classes.service__item__body} ${classes.service__item__body__tear1}`}
                  >
                    <p className={classes.par1}>{service.par1}</p>
                    <p>{service.par2}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <img
          className={classes.animation}
          src={`${process.env.PUBLIC_URL}/images/ezgif.com-gif-maker.gif`}
          alt="glass is filled with drink"
        />

        {services
          .filter((item) => item.id === 'SapnqfrZnkbF6rStMzsR')
          .map((service) => (
            <div key={service.id}>
              <div className={classes.service__item__container}>
                <header
                  className={`${classes.service__item__header} ${classes.service__item__header__tear2}`}
                >
                  {activeServiceDashboard && (
                    <div className={classes.service_update_btn2}>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/pen_white.png`}
                        alt="draw"
                      />
                    </div>
                  )}

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </header>

                <div
                  className={`${classes.service__item__body} ${classes.service__item__body__tear2}`}
                >
                  <p className={classes.par1}>{service.par1}</p>
                  <p>{service.par2}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {addDataModal && <AddUpdateDataModal />}
    </section>
  );
};

export default Services;
