import styles from './menu.styl';

import React from 'react';
import classNames from 'classnames';

import MenuLink from '../../connectors/menuLink';
import OpenSubMenu from '../../connectors/openSubMenu';
import {menu, submenuCategories} from './statics';

export default class Menu extends React.Component {
  render() {
    const areaClasses = classNames({
      [`${styles.area}`]: true,
      [`${styles.areaHidden}`]: !this.props.open
    });

    return (
      <div className={areaClasses}>
        <nav>
          <ul className={styles.navList}>
            {menu.map((item, index) => {
              return <MenuLink link={item} key={index} />;
            })}
          </ul>
          <OpenSubMenu id={'categories'} menu={submenuCategories} />;
        </nav>
      </div>
    );
  }
}

Menu.propTypes = {
  close: React.PropTypes.func,
  open: React.PropTypes.bool
};

Menu.defaultProps = { open: true };
