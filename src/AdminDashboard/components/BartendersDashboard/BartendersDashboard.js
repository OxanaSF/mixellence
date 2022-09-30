import React from 'react';

import NavSide from '../NavSide/NavSide';
import BartendersDisplayDashboard from './BartendersDisplayDashboard';
import AddDataContainer from '../ui/AddEditDelete/AddDataContainer';
import DashboardFooter from '../ui/DashboardFooter/DashboardFooter';
import DashboardContainer from '../ui/DashboardContainer/DashboardContainer';
import DashboardHeader from '../ui/DashboardHeader/DashboardHeader';
import DashboardMain from '../ui/DashboardMain/DashboardMain';

import classes from './BartendersDashboard.module.css';

const BartendersDashboard = () => {
  return (
    <DashboardContainer>
      <NavSide />

      <section>
        <DashboardHeader>
          <h3>Bartenders</h3>
        </DashboardHeader>

        <DashboardMain>
          <div className={classes.team_wrapper}>
            <BartendersDisplayDashboard />
            <AddDataContainer />
          </div>
        </DashboardMain>
        <DashboardFooter />
      </section>
    </DashboardContainer>
  );
};

export default BartendersDashboard;
