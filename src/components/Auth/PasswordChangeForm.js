import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../context/auth-context';
import SendBtn from '../ui/SendBtn/SendBtn';
import classes from './PasswordChangeForm.module.css';

const passwordChangeHandler = () => {};

const LogOutForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate()



  const passwordChangeHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // * add validation

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD03EO22Za3dprVU1bGjsklfKWhh94KUnw',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headres: {
          'Content-Type': 'application/json',
        },
      }
    ).then (res => {
      
      // navigate('/admin-dashboard');

      if (res.ok) {
        console.log('OK!!!')
        authCtx.logout();
         navigate('/admin-dashboard');
      } else {
        return res.json().then((data) => {
          let errorMessage = 'failed!';
          throw new Error(errorMessage);
        });
      }
    })
  };

  return (
    <section className={classes.password_change_crapper}>
      <div className={classes.password_change}>
        <h4>Forgot Password?</h4>

        <form onSubmit={passwordChangeHandler}>
          <div className={classes.control}>
            <input
              className={classes.email}
              type="password"
              id="email"
              required
              placeholder="New Password"
              ref={newPasswordInputRef}
              minLength={7}
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
