import styles from './navLink.styl';

import React from 'react';
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
      <Link activeStyle={activeStyle} onlyActiveOnIndex className={styles.navLink} to={link.url} onClick={close}>{link.text}</Link>
    );
  }

  renderSubLink() {
    const { link, openSubmenu } = this.props;

    return (
      <a className={styles.navLink} data-submenu={link.submenu} onClick={openSubmenu.bind(null, link.text, link.submenu)}>{link.text}</a>
    );
  }
}

NavLink.propTypes = { 
  link: React.PropTypes.object.isRequired,
  close: React.PropTypes.func.isRequired,
  openSubmenu: React.PropTypes.func
};
