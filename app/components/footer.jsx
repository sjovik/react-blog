import styles from './footer.styl';

import React from 'react';

const Footer = (props) => <div className={styles.footer}>{props.children}</div>;

Footer.propTypes = { children: React.PropTypes.node };

export default Footer;
