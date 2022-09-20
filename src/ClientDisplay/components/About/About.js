import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';

import classes from './About.module.css';

const About = () => {
  const [aboutInfo, setAboutInfo] = useState({});

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'about'),
      (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setAboutInfo({...doc.data() });
        });
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  return (
    <section className={classes.about__container} id="about">
      <h2>About Us</h2>

      <div className={classes.about_info_wrapper}>
        <div className={classes.about__info}>
          <p className={classes.par1}>{aboutInfo.text1}</p>

          <p className={classes.par2}>{aboutInfo.text2}</p>

          <footer className={classes.about__footer}>
            <div className={classes.about__footer__location}>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/pin.png`}
                  alt="pin"
                />
              </div>
              <div>{aboutInfo.city}</div>
            </div>

            <div>{aboutInfo.text3}</div>
          </footer>
        </div>
      </div>

      <div className={classes.img}>
        <img
          className={classes.barImg}
          src={`${process.env.PUBLIC_URL}/images/bar.png`}
          alt="bar"
        />
      </div>
    </section>
  );
};

export default About;
