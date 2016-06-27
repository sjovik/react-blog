import styles from './navLink.styl';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

const NavLink = ({link, toggleSubMenu, closeMenu, subMenuIsOpen}) => {
  const renderLink = () => {
    const activeStyle = { color: '#fff' };

    return (
      <Link activeStyle={activeStyle}
        onlyActiveOnIndex
        className={styles.navLink}
        to={link.url}
        onClick={closeMenu}>
        {link.text}
      </Link>
    );
  };

  const renderSubLink = () => {
    const classes = classNames( {
      [`${styles.navLink}`]: true,
      [`${styles.subMenuLink}`]: true
    });

    return (
      <a className={classes}
        data-submenu={subMenuIsOpen}
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
  subMenuIsOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired
};

export default NavLink;
