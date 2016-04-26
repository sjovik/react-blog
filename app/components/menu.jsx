import styles from './menu.styl';

import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <div className={styles.area}>
        <nav>
          <ul className={styles.navList}>
            <NavLink text="Home" />
            <NavLink text="Categories" />
            <NavLink text="Contact" />
            <NavLink text="Shop" />
          </ul>
        </nav>
      </div>
    );
  }
}

const NavLink = ({text, url}) => {
  return (
    <li className={styles.navItem}>
      <a className={styles.navLink} href={url}>{text}</a>
    </li>
  );
};

NavLink.propTypes = { 
  text: React.PropTypes.string.isRequired,
  url: React.PropTypes.string
};

NavLink.defaultProps = {
  url: '#' 
};

