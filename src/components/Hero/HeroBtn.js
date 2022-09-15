import React from 'react'

import classes from './HeroBtn.module.css'

const HeroBtn = (props) => {
  
  return (
    <button className={classes.heroButton}>{props.text}</button>
  )
}

export default HeroBtn