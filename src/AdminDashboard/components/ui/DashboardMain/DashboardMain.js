import React from 'react';

import classes from './DashboardMain.module.css';
const DashboardMain = (props) => {
  return (
    <main className={classes.dashboard_main_container}>
      {props.children}
      </main>
  );
};

export default DashboardMain;
