import styles from './contact.styl';

import React from 'react';

import Header from '../header';
import ContactForm from '../form/contactForm';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Header text='Send us a message' />
      <ContactForm />
      <div className={styles.follow}>
        <Header text='Follow' />
      </div>
    </div>
  );
};

export default Contact;
