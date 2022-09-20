import React from 'react'


import classes from './DashboardFooter.module.css'

const DashboardFooter = () => {
  return (
    <footer className={classes.dashboard_footer_container}>
        <div className={classes.dashboard_footer_wrapper}>
            <button className={classes.save_changes_btn}>Save Changes</button>
            <button className={classes.discard_changes_btn}>Discard Changes</button>
        </div>
    </footer>
  )
}

export default DashboardFooter