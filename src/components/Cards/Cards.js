import React from 'react';

import classes from './Cards.module.css';

export default function Cards({ children }) {
  return <div className={classes.cards}>{children}</div>;
}
