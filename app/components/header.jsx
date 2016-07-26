import styles from './header.styl';

import React, { PropTypes } from 'react';

const Header = ({text, h1}) => (h1) ? <h1 className={styles.h1}>{text}</h1> : <h2 className={styles.h1}>{text}</h2>;

Header.propTypes = { 
  text: PropTypes.string.isRequired,
  h1: PropTypes.bool
};

export default Header;
