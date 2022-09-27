import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';


import classes from './Services.module.css';

const Services = () => {
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
          .filter((item) => item.serviceId === 'service1')
          .map((service) => (
            <div key={service.id}>
              <div className={classes.service__item__container}>
                <header
                  className={`${classes.service__item__header} ${classes.service__item__header__tear1} `}
                >
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
          .filter((item) => item.serviceId === 'service2')
          .map((service) => (
            <div key={service.id}>
              <div className={classes.service__item__container}>
                <header
                  className={`${classes.service__item__header} ${classes.service__item__header__tear2}`}
                >
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
