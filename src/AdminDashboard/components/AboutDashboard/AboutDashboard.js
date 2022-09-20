import React from 'react';

import NavSide from '../NavSide/NavSide';
import About from '../../../ClientDisplay/components/About/About';
import AddEditDelete from '../ui/AddEditDelete/AddEditDelete';
import DashboardContainer from '../ui/DashboardContainer/DashboardContainer';
import DashboardHeader from '../ui/DashboardHeader/DashboardHeader';
import DashboardMain from '../ui/DashboardMain/DashboardMain';

import classes from './AboutDashboard.module.css';

const AboutDashboard = () => {
  return (
    <DashboardContainer>
      <NavSide />
      <section>
        <DashboardHeader>
          <h3>About us</h3>
        </DashboardHeader>

        <DashboardMain>
          <div className={classes.about_wrapper}>
            <About />
            <AddEditDelete />
          </div>
        </DashboardMain>
      </section>
    </DashboardContainer>
  );
};

export default AboutDashboard;
