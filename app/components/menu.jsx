import styles from './menu.styl';

import React from 'react';

export default class Menu extends React.Component {
  render() {
    const items = ['Home', 'Categories', 'Contact', 'Shop'];

    return (
      <div ref={(c) => this.$menu = c} className={styles.area}>
        <nav>
          <ul className={styles.navList}>
            {items.map((item, index) => {
              return <NavLink key={index} close={this.props.close} text={item} />;
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

Menu.propTypes = { close: React.PropTypes.func };
  
const NavLink = ({close, text, url}) => {
  return (
    <li className={styles.navItem}>
      <a className={styles.navLink} onClick={close} href={url}>{text}</a>
    </li>
  );
};

NavLink.propTypes = { 
  text: React.PropTypes.string.isRequired,
  url: React.PropTypes.string,
  close: React.PropTypes.func
};

NavLink.defaultProps = {
  url: '#' 
};

