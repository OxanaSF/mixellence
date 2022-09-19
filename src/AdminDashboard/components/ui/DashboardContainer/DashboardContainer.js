import React from 'react'

import classes from './DashboardContainer.module.css'

const MainDashboardContainer = (props) => {
  return (
    <section className={classes.dashboard_container }>
       {props.children}

    </section>
  )
}

export default MainDashboardContainer