import React from 'react';

import NavSide from '../NavSide/NavSide';
import Testimonials from '../../../components/Testimonials/Testimonials'
import DashboardContainer from '../ui/DashboardContainer/DashboardContainer';
import DashboardHeader from '../ui/DashboardHeader/DashboardHeader';
import DashboardMain from '../ui/DashboardMain/DashboardMain';


import classes from './TestimonialsDashboard.module.css';

const SignatureDrinksDashboard = () => {
  return (
    <DashboardContainer>
      <NavSide />
      <section>
        <DashboardHeader>
          <h3>Testimonials</h3>
        </DashboardHeader>
        
          <DashboardMain>
            <h1>Testimonials</h1>
            <Testimonials />
          </DashboardMain>
      
      </section>
    </DashboardContainer>
  );
};

export default SignatureDrinksDashboard;
