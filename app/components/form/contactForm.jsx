import styles from './contactForm.styl';

import React from 'react';

import Input from './input';

const ContactForm = () => {
  return (
    <div className={styles.form}>
      <form autoComplete="off">
        <Input label="Name" />
        <Input label="Email" />
        <Input label="Message" />
      </form>
    </div>
  );
};

export default ContactForm;
