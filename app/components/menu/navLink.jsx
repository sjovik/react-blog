import styles from './navLink.styl';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavLink = ({link, toggleSubMenu, close}) => {
  const renderLink = () => {
    const activeStyle = { color: '#fff' };

    return (
      <Link activeStyle={activeStyle}
        onlyActiveOnIndex
        className={styles.navLink}
        to={link.url}
        onClick={close}>
        {link.text}
      </Link>
    );
  };

  const renderSubLink = () => {
    return (
      <a className={styles.navLink}
        data-submenu={!!link.submenu}
        onClick={toggleSubMenu}>
        {link.text}
      </a>
    );
  };

  return (
    <li className={styles.navItem}>
      {link.submenu ? renderSubLink() : renderLink()}
    </li>
  );
};

NavLink.propTypes = {
  toggleSubMenu: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired
};

export default NavLink;
