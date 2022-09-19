import React from 'react'

import classes from './ConfirmationCard.module.css'

const ConfirmationCard = () => {
  return (
    <div className={classes.confirmationCardContainer}>
        <p>Thank you for your message</p>
        <p>We will reply within 24 hours</p>
        <h4>Mixellence</h4>
    </div>
  )
}

export default ConfirmationCard