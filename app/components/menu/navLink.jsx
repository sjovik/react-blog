import styles from './navLink.styl';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavLink extends React.Component {
  render() {
    return (
      <li className={styles.navItem}>
        {this.props.link.submenu ? this.renderSubLink() : this.renderLink()}
      </li>
    );
  }

  renderLink() {
    const { link, close } = this.props;
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
  }

  renderSubLink() {
    const { link, toggleSubMenu } = this.props;

    return (
      <a className={styles.navLink}
        data-submenu={!!link.submenu}
        onClick={toggleSubMenu}>
        {link.text}
      </a>
    );
  }
}

NavLink.propTypes = { 
  toggleSubMenu: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired
};
