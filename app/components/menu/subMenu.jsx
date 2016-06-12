import styles from './subMenu.styl';

import React from 'react';

import NavLink from './navLink';

const SubMenu = ({animating, menu, onClick, close}) => {
  return (
    <div className={styles.container} data-animating={animating}>
      <ul className={styles.navList}>
        <li className={styles.header} onClick={onClick.bind(null, 'back')} >{'< back'}</li>
        {menu.map((item, index) => {
          return <NavLink link={item} key={index} openSubmenu={onClick} close={close} />;
        })}
      </ul>
    </div>
  );
};

SubMenu.propTypes = { 
  onClick: React.PropTypes.func.isRequired,
  close: React.PropTypes.func.isRequired,
  menu: React.PropTypes.array,
  animating: React.PropTypes.bool
};

export default SubMenu;
