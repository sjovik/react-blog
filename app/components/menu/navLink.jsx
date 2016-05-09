import styles from './navLink.styl';

import React from 'react';

const NavLink = ({onClick, text, url, submenu}) => {
  return (
    <li className={styles.navItem}>
      <a className={styles.navLink} data-submenu={submenu} onClick={onClick.bind(null, text, submenu)} href={url}>{text}</a>
    </li>
  );
};

NavLink.propTypes = { 
  text: React.PropTypes.string.isRequired,
  url: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
  submenu: React.PropTypes.bool
};

NavLink.defaultProps = {
  url: '#' 
};

export default NavLink;
