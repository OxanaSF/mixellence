import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import SendBtn from '../../components/ui/SendBtn/SendBtn';
import AuthContext from '../../context/auth-context';
import classes from './AuthForm.module.css';


const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();


  const authCtx = useContext(AuthContext);

  // const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    const url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD03EO22Za3dprVU1bGjsklfKWhh94KUnw';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        console.log(data);
        console.log('SUCCESS!!!');
        navigate("/admin-dashboard")
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <div className={classes.adminImg}>
        <img
          src={`${process.env.PUBLIC_URL}/images/clients/client1.png`}
          alt="admin"
        />
      </div>

      <h4>Log in</h4>

      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <input
            className={classes.email}
            type="email"
            id="email"
            required
            placeholder="User name"
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <input
            className={classes.password}
            type="password"
            id="password"
            required
            placeholder="Password"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button className={classes.forgotPassword}>Forgot password?</button>
          <SendBtn></SendBtn>
          {/* 
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button> */}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
