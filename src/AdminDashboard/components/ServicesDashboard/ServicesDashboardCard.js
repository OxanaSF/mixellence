import React from 'react';

import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import classes from './ServicesDashboardDisplay.module.css';

const ServicesDashboardCard = ({ id, title, description, par1, par2 }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={classes.service__item__container}>
        <header
          className={
            id === '9EMmwb87lJ4Jyqjq01vu'
              ? `${classes.service__item__header} ${classes.service__item__header__tear1}`
              : `${classes.service__item__header} ${classes.service__item__header__tear2}`
          }
        >
          <button
            className={
              id === '9EMmwb87lJ4Jyqjq01vu'
                ? classes.service_update_btn1
                : classes.service_update_btn2
            }
            onClick={() => navigate(`/services-dashboard/${id}/modal`)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/pen_white.png`}
              alt="draw"
            />
          </button>

          <h3>{title}</h3>
          <p>{description}</p>
        </header>

        <div
          className={
            id === '9EMmwb87lJ4Jyqjq01vu'
              ? `${classes.service__item__body} ${classes.service__item__body__tear1}`
              : `${classes.service__item__body} ${classes.service__item__body__tear2}`
          }
        >
          <p className={classes.par1}>{par1}</p>
          <p>{par2}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDashboardCard;
