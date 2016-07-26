import styles from './contact.styl';

import React, { PropTypes } from 'react';

import Header from '../header';
import ContactForm from '../form/contactForm';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Header text='Send us a message' />
      <ContactForm />
      <Header text='Follow' />
    </div>
  );
};

Contact.propTypes = {
};

export default Contact;
