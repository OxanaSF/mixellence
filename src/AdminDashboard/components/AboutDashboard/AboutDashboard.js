import React from 'react';

import NavSide from '../NavSide/NavSide';
import AboutDashboardDisplay from './AboutDashboardDisplay';
import DashboardContainer from '../ui/DashboardContainer/DashboardContainer';
import DashboardHeader from '../ui/DashboardHeader/DashboardHeader';
import DashboardMain from '../ui/DashboardMain/DashboardMain';
import DashboardFooter from '../ui/DashboardFooter/DashboardFooter';

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
            <AboutDashboardDisplay />
          </div>
        </DashboardMain>
        <DashboardFooter />
      </section>
    </DashboardContainer>
  );
};

export default AboutDashboard;
