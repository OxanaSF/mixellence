import React from 'react';

import classes from './Contact.module.css';

const ContactForm = () => {
  return (
    <section className={classes.contact_form_wrapper}>

      <p> Contact Us</p>

        <form className={classes.contact_form_container}>
          <div>
          <input type="text" name="name" required  placeholder='Name' />
          </div>
          <div>
          <input type="email" name="email" required placeholder='Email' />
          </div>
          <div>
          <input type="phone" name="phone" required placeholder='Phone Number' />
          </div>
          <div>
          <input type="text" name="event_type" required placeholder='Event Type'  />
          </div>
          <div>
          <input type="number" name="number_guests" required placeholder='Number of Guests'  />
          </div>
          <div>
          <textarea name="message" required rows="8"/>
          </div>
        </form>

    </section>
  );
};

export default ContactForm;
