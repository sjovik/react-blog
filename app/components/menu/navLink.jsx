import styles from './navLink.styl';

import React from 'react';
import { Link } from 'react-router';

const NavLink = ({onClick, link}) => {
  // TODO: change this so it renders link inside if it's not a submenu link, and a if it is, calls different methods (like opensubmenu()).
      // <Link className={styles.navLink} data-submenu={link.submenu} onClick={onClick.bind(null, link.text, link.submenu)} to={link.url}>{link.text}</Link>
  return (
    <li className={styles.navItem}>
      {link.text}
    </li>
  );
};

NavLink.propTypes = { 
  link: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default NavLink;
