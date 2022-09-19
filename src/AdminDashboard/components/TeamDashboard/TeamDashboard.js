import React from 'react';

import NavSide from '../NavSide/NavSide';
import MeetOurTeam from '../../../components/MeetOurTeem/MeetOurTeem'
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
          <h1>Meet Our Team</h1>
       
    
        </DashboardMain>
      </section>
    </DashboardContainer>
  );
};

export default MeetOurTeamDashboard;
