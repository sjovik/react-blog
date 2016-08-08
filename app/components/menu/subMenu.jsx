import styles from './subMenu.styl';

import React from 'react';

import MenuLink from '../../connectors/menuLink';

const SubMenu = ({menu, isOpen, close}) => (
  <div className={styles.container} data-open={isOpen}>
    <ul className={styles.navList}>
      <li className={styles.header} onClick={close} >{'back'}</li>
      {menu.map((item, index) => {
        return <MenuLink link={item} key={index} />;
      })}
    </ul>
  </div>
);

SubMenu.propTypes = { 
  menu: React.PropTypes.array.isRequired,
  isOpen: React.PropTypes.bool.isRequired,
  close: React.PropTypes.func.isRequired
};

export default SubMenu;
