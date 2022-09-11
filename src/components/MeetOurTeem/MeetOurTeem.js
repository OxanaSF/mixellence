import React from 'react'

import TeamList from './TeamList'
import classes from './MeetOurTeem.module.css'

const MeetOurTeem = () => {
  return (
    <section className={classes.meet__our__team__container}>
      <h2>Meet Out Team</h2>
      <TeamList />
    </section>
  )
}

export default MeetOurTeem