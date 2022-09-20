import React from 'react'

import classes from './DashboardContainer.module.css'

const MainDashboardContainer = (props) => {
  return (
    <div className={classes.dashboard_container }>
       {props.children}

    </div>
  )
}

export default MainDashboardContainer