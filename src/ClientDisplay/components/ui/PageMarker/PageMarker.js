import React from 'react';

import classes from './PageMarker.module.css';

export default function PageMarker({ page }) {
  return (
    <div className={classes.marker}>
      <span></span>
      <span>{page}</span>
    </div>
  );
}
