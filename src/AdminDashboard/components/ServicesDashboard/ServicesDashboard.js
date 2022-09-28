import React from 'react';

import NavSide from '../NavSide/NavSide';
import ServicesDashboardDisplay from './ServicesDashboardDisplay'
import DashboardFooter from '../ui/DashboardFooter/DashboardFooter';
import DashboardContainer from '../ui/DashboardContainer/DashboardContainer';
import DashboardHeader from '../ui/DashboardHeader/DashboardHeader';
import DashboardMain from '../ui/DashboardMain/DashboardMain';

import classes from './ServicesDashboard.module.css';

const ServicesDashboard = () => {
  return (
    <DashboardContainer>
      <NavSide />
      <section>
        <DashboardHeader>{<h3>Services</h3>}</DashboardHeader>

        <DashboardMain>
          <div className={classes.services_wrapper}>
            <div className={classes.services}>
              <ServicesDashboardDisplay  />
            </div>
          </div>
        </DashboardMain>

        <DashboardFooter />
      </section>
    </DashboardContainer>
  );
};

export default ServicesDashboard;
