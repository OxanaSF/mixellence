import React from 'react';

import NavSide from '../NavSide/NavSide';
import AddEditDelete from '../ui/AddEditDelete/AddEditDelete';
import Services from '../../../ClientDisplay/components/Services/Services';
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
        <DashboardHeader>
          <h3>Services</h3>
        </DashboardHeader>

        <DashboardMain>


          <div className={classes.services_wrapper}>
            <div className={classes.services}>
            <Services />
            </div>
            <AddEditDelete />
          </div>


        </DashboardMain>
        
        <DashboardFooter />
      </section>
    </DashboardContainer>
  );
};

export default ServicesDashboard;
