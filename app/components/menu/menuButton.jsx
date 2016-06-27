import styles from './menuButton.styl';

import React from 'react';
import classNames from 'classnames';

const MenuButton = ({isOpen, toggleMenu}) => {
  const renderTitle = () => {
    return <div className={styles.text}>Menu</div>;
  };

  const classes = classNames( {
    [`${styles.bar}`]: true,
    [`${styles.barHidden}`]: isOpen
  });

  return (
    <div className={styles.button} onClick={() => { toggleMenu(!isOpen); } } >
      <div className={styles.icon}>
        <div className={styles.bars}>
          <div className={classes}></div>
          <div className={classes}></div>
          <div className={classes}></div>
        </div>
      </div>
      { isOpen ? null : renderTitle() }
    </div>
  );
};

MenuButton.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  toggleMenu: React.PropTypes.func.isRequired
};

export default MenuButton;
