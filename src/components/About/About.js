import React from 'react';

import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes.about__container} id="about">
      <h2>About Us</h2>
      <div>
        <div className={classes.about__info}>
          <p className={classes.par1}>
            Mixellence is a mobile pop-up bar that provides excellent and
            professional bartending service based out of Monterey Bay,
            California. We provide bartending service for any event. We make
            custom menus for your event and provide all accessories, garnishes,
            & materials needed to serve your guests.
          </p>

          <p>
            For quotes and special request please book a consultation or call us
            at (555) 555-5555
          </p>

          <footer className={classes.about__footer}>
          <div className={classes.about__footer__location}>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/pin.png`}
                  alt="pin"
                />
              </div>
              <div>Monterey Bay, California</div>
            </div>
            
            <div>Native owned business</div>

           

          </footer>
        </div>
      </div>
    </section>
  );
};

export default About;
