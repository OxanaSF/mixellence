import React from 'react';

import NavSide from '../NavSide/NavSide';
import HeroDisplayDashboard from './HeroDisplayDashboard'
import DashboardFooter from '../ui/DashboardFooter/DashboardFooter';
import DashboardContainer from '../ui/DashboardContainer/DashboardContainer';
import DashboardHeader from '../ui/DashboardHeader/DashboardHeader';
import DashboardMain from '../ui/DashboardMain/DashboardMain';



const HeroDashboard = () => {
  return (
    <DashboardContainer>
      <NavSide />
      <section>
        <DashboardHeader>
          <h3>Landing Page</h3>
        </DashboardHeader>

        <DashboardMain>
          <HeroDisplayDashboard />
        </DashboardMain>
        <DashboardFooter />
      </section>
    </DashboardContainer>
  );
};

export default HeroDashboard;
