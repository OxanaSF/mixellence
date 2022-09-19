import React from 'react';

import NavSide from '../../AdminDashboard/components/NavSide/NavSide';
import classes from './AdminDashboardDisplay.module.css';

const AdminDashboardDisplay = () => {
  return (
    <main className={classes.admin_dashboard_display_container}>
      <NavSide />
      MAIN
    </main>
  );
};

export default AdminDashboardDisplay;
