import styles from './subMenu.styl';

import React from 'react';

import NavLink from './navLink';

const SubMenu = ({animating, menu, openSubmenu, closeSubmenu, close}) => (
  <div className={styles.container} data-animating={animating}>
    <ul className={styles.navList}>
      <li className={styles.header} onClick={closeSubmenu} >{'< back'}</li>
      {menu.map((item, index) => {
        return <NavLink link={item} key={index} openSubmenu={openSubmenu} close={close} />;
      })}
    </ul>
  </div>
);

SubMenu.propTypes = { 
  openSubmenu: React.PropTypes.func.isRequired,
  closeSubmenu: React.PropTypes.func.isRequired,
  close: React.PropTypes.func.isRequired,
  menu: React.PropTypes.array,
  animating: React.PropTypes.bool
};

export default SubMenu;
