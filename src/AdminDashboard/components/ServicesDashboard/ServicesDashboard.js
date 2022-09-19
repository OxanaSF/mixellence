import React from 'react';

import NavSide from '../NavSide/NavSide';
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
            <h1>Services</h1>
            <div>Something is here</div>
            <div>Something is here</div>
          </DashboardMain>
      
      </section>
    </DashboardContainer>
  );
};

export default ServicesDashboard;
