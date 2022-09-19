import React from 'react'


import classes from './DashboardHeader.module.css'

const DashboardHeader = (props) => {
  return (
    <header className={classes.dashboard_header}>
        {props.children}
    </header>
  )
}

export default DashboardHeader