import React from 'react';

import NavSide from '../NavSide/NavSide';
import DashboardContainer from '../ui/DashboardContainer/DashboardContainer';
import DashboardHeader from '../ui/DashboardHeader/DashboardHeader';
import DashboardMain from '../ui/DashboardMain/DashboardMain';
import SignatureDrinksDisplayDashboard from './SignatureDrinksDisplayDashboard';


import classes from './SignatureDrinksDashboard.module.css';

const SignatureDrinksDashboard = () => {
  return (
    <DashboardContainer>
      <NavSide />
      <section>
        <DashboardHeader>
          <h3>Signature Drinks</h3>
        </DashboardHeader>
        
          <DashboardMain>
           <SignatureDrinksDisplayDashboard />
          </DashboardMain>
      
      </section>
    </DashboardContainer>
  );
};

export default SignatureDrinksDashboard;
