import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';

import { Loader } from 'semantic-ui-react';
import classes from './About.module.css';

const About = () => {
  const [aboutInfo, setAboutInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const unsub = onSnapshot(
      collection(db, 'about'),
      (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setAboutInfo({ ...doc.data() });
        });
        setIsLoading(false);
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

      {isLoading ? (
        <Loader active inline="centered" size="huge" />
      ) : (
        <>
          <div className={classes.about_info_wrapper}>
            <div className={classes.about__info}>
              <p className={classes.par1}>{aboutInfo.mainParagraph}</p>

              <p className={classes.par2}>{aboutInfo.phoneParagraph}</p>

              <footer className={classes.about__footer}>
                <div className={classes.about__footer__location}>
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/pin.png`}
                      alt="pin"
                    />
                  </div>
                  <div>{aboutInfo.place}</div>
                </div>

                <div>{aboutInfo.businessOwned}</div>
              </footer>
            </div>
          </div>
        </>
      )}

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
