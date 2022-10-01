import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { db } from '../../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { Link, Outlet, useLocation } from 'react-router-dom';

import ServicesDashboardCard from './ServicesDashboardCard';
import { addDataModalActions } from '../../../store/add-data-modal-slice';
import { AddUpdateDataModal } from '../../../AdminDashboard/components/ui/AddUpdateModal/AddUpdateDataModal';

import classes from './ServicesDashboardDisplay.module.css';


const ServicesDashboardDisplay = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const addDataModal = useSelector((state) => state.addDataModal.addDataModal);

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

  return (
    <section className={classes.services__container} id="services">
      <h2>Services</h2>
      <Link to="modal" state={{ background: location }}></Link>
      <Outlet />

      <div className={classes.services__main}>
        {services
          .filter((item) => item.id === '9EMmwb87lJ4Jyqjq01vu')
          .map((service) => (
            <ServicesDashboardCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              par1={service.par1}
              par2={service.par2}
            />
          ))}

        <img
          className={classes.animation}
          src={`${process.env.PUBLIC_URL}/images/ezgif.com-gif-maker.gif`}
          alt="glass is filled with drink"
        />

        {services
          .filter((item) => item.id === 'SapnqfrZnkbF6rStMzsR')
          .map((service) => (
            <ServicesDashboardCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              par1={service.par1}
              par2={service.par2}
            />
          ))}
      </div>

      {addDataModal && <AddUpdateDataModal />}
    </section>
  );
};

export default ServicesDashboardDisplay;
