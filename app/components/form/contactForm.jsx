import styles from './contactForm.styl';

import React from 'react';

import Textfield from './textfield';

const ContactForm = () => {
  return (
    <div className={styles.form}>
      <form autoComplete="off">
        <Textfield label="Name" />
        <Textfield label="Email" />
        <Textfield label="Message" area={true} />
      </form>
    </div>
  );
};

export default ContactForm;
