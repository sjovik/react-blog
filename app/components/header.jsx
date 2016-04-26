import styles from './header.styl';

import React from 'react';

const Header = ({text}) => <h1 className={styles.h1}>{text}</h1>;

Header.propTypes = { text: React.PropTypes.string };

export default Header;
