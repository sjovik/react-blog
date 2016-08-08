import styles from './menuButton.styl';

import React from 'react';

const MenuButton = ({isOpen, toggleMenu}) => {
  const renderTitle = () => {
    return <div className={styles.text}>Menu</div>;
  };

  const barClasses = `${styles.bar} ${(isOpen) ? styles.barHidden : ''}`;
  const buttonClasses = `${styles.button} ${(isOpen) ? styles.buttonPushed : ''}`;

  return (
    <div className={buttonClasses} onClick={() => { toggleMenu(!isOpen); } } >
      <div className={styles.icon}>
        <div className={styles.bars}>
          <div className={barClasses}></div>
          <div className={barClasses}></div>
          <div className={barClasses}></div>
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
