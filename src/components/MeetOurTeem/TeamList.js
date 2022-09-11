import React from 'react'


import classes from './TeamList.module.css'

const TeamList = () => {
  return (
    <div className={classes.team__list_container}>
        <div className={classes.team__list__items}> Team List </div>
        <div className={classes.switch__dots}>Switch dots</div>
       
    </div>
  )
}

export default TeamList