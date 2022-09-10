import React from 'react';

import { SERVICES_DATA } from '../../data/services-data';
import classes from './Services.module.css';

const Services = () => {
  return (
    <section className={classes.services__container}>
      <h2>Services</h2>

      <div className={classes.services__main}>
        {SERVICES_DATA.filter((item) => item.id === 'service1').map(
          (service) => (
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
                    <p>{service.par1}</p>
                    <p>{service.par2}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        <div>
          <img
            className={classes.animation}
            src={`${process.env.PUBLIC_URL}/images/glass.svg`}
            alt=""
          />
        </div>

        {SERVICES_DATA.filter((item) => item.id === 'service2').map(
          (service) => (
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
                  <p>{service.par1}</p>
                  <p>{service.par2}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
