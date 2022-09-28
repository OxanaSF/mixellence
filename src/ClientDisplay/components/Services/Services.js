import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';

// import { BARTENDERS } from '../../../data/bartenders';
import EditData from '../../../AdminDashboard/components/ui/AddEditDelete/EditData';

import classes from './Services.module.css';
import { createLanguageService } from 'typescript';

const Services = () => {
  const activeServiceDashboard = useSelector(
    (state) => state.activateServicesDashboard.activateServicesDashboard
  );

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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

  return (
    <section className={classes.services__container} id="services">
      <h2>Services</h2>

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
                    <div className={classes.service_update_btn1}>
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
    </section>
  );
};

export default Services;
