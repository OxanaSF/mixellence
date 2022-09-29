import React from 'react';

import classes from './SignatureTitle.module.css';

export default function SignatureTitle({ page }) {
  return (
    <div className={classes.sigtitle}>
      <span></span>
      <span>{page}</span>
    </div>
  );
}
