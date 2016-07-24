import styles from './menu.styl';

import React from 'react';
import classNames from 'classnames';

import MenuLink from '../../connectors/menuLink';
import OpenSubMenu from '../../connectors/openSubMenu';
import {menu, submenuCategories} from './statics';

// TODO: Move state back here from redux? Menu should handle it's own toggle state, not app dependant.
const Menu = ({isOpen}) => {
  const areaClasses = classNames({
    [`${styles.area}`]: true,
    [`${styles.areaHidden}`]: !isOpen
  });

  return (
    <div className={areaClasses}>
      <nav>
        <ul className={styles.navList}>
          {menu.map((item, index) => {
            return <MenuLink link={item} key={index} />;
          })}
        </ul>
        <OpenSubMenu id={'categories'} menu={submenuCategories} />
      </nav>
    </div>
  );
};

Menu.propTypes = {
  isOpen: React.PropTypes.bool.isRequired
};

export default Menu;
