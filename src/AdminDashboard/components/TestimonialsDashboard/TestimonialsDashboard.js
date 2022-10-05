import React from 'react';

import NavSide from '../NavSide/NavSide';
import TestimonialsDisplayDashboard from './TestimonialsDisplayDashboard';
import AddDataContainer from '../ui/AddEditDelete/AddDataContainer';
import DashboardFooter from '../ui/DashboardFooter/DashboardFooter';
import DashboardContainer from '../ui/DashboardContainer/DashboardContainer';
import DashboardHeader from '../ui/DashboardHeader/DashboardHeader';
import DashboardMain from '../ui/DashboardMain/DashboardMain';

import classes from './TestimonialsDashboard.module.css';

const TestimonialsDashboard = () => {
  return (
    <DashboardContainer>
      <NavSide />
      <section style={{width: '100%'}}>
        <DashboardHeader>
          <h3>Testimonials</h3>
        </DashboardHeader>

        <DashboardMain>
          <div className={classes.services_wrapper}>
            <TestimonialsDisplayDashboard />
            <AddDataContainer />
          </div>
        </DashboardMain>
        <DashboardFooter />
      </section>
    </DashboardContainer>
  );
};

export default TestimonialsDashboard;
