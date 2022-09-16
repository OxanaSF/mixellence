import React from 'react';

import SendBtn from '../ui/SendBtn/SendBtn';
import classes from './PasswordChangeForm.module.css';

const passwordChangeHandler = () => {};

const LogOutForm = () => {
  return (
    <section className={classes.password_change_crapper}>
      <div className={classes.password_change}>
        <h4>Forgot Password?</h4>

        <form onSubmit={passwordChangeHandler}>
          <div className={classes.control}>
            <input
              className={classes.email}
              type="email"
              id="email"
              required
              placeholder="email"
              // ref={emailInputRef}
            />
          </div>

          <div className={classes.actions}>
            <SendBtn></SendBtn>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LogOutForm;
