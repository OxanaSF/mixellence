import React from 'react';

import NavSide from '../NavSide/NavSide';
import { BartendersDashboardDisplay } from './BartendersDashboardDisplay';
import AddEditDelete from '../ui/AddEditDelete/AddEditDelete';
import DashboardFooter from '../ui/DashboardFooter/DashboardFooter';

import DashboardContainer from '../ui/DashboardContainer/DashboardContainer';
import DashboardHeader from '../ui/DashboardHeader/DashboardHeader';
import DashboardMain from '../ui/DashboardMain/DashboardMain';
import classes from './TeamDashboard.module.css';

const MeetOurTeamDashboard = () => {
  return (
    <DashboardContainer>
      <NavSide />
      <section>
        <DashboardHeader>
          <h3>Bartenders</h3>
        </DashboardHeader>

        <DashboardMain>
          <div className={classes.team_wrapper}>
            <BartendersDashboardDisplay />
            <AddEditDelete />
          </div>
        </DashboardMain>
        <DashboardFooter />
      </section>
    </DashboardContainer>
  );
};

export default MeetOurTeamDashboard;
