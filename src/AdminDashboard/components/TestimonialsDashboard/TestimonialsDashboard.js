import React from 'react';

import NavSide from '../NavSide/NavSide';
import Testimonials from '../../../ClientDisplay/components/Testimonials/Testimonials'
import DashboardContainer from '../ui/DashboardContainer/DashboardContainer';
import DashboardHeader from '../ui/DashboardHeader/DashboardHeader';
import DashboardMain from '../ui/DashboardMain/DashboardMain';


import classes from './TestimonialsDashboard.module.css';
import AddEditDelete from '../ui/AddEditDelete/AddEditDelete';

const SignatureDrinksDashboard = () => {
  return (
    <DashboardContainer>
      <NavSide />
      <section>
        <DashboardHeader>
          <h3>Testimonials</h3>
        </DashboardHeader>

        <DashboardMain>
          <div className={classes.testimonials_wrapper}> 
            <Testimonials />
            <AddEditDelete />
          </div>
        </DashboardMain>

      </section>
    </DashboardContainer>
  );
};

export default SignatureDrinksDashboard;
