import styles from './contactForm.styl';

import React, { PropTypes } from 'react';

import Input from './input';

const ContactForm = () => {
  return (
    <div className={styles.form}>
      <form>
        <Input label="Your name" />
        <Input label="Your email" />
        <Input label="Your message" />
      </form>
    </div>
  );
};

ContactForm.propTypes = {
};

export default ContactForm;
