import styles from './menuButton.styl';

import React from 'react';
import classNames from 'classnames';

export default class MenuButton extends React.Component {
  render() {
    return (
      <div className={styles.button} onClick={this.props.onClick} >
        <div className={styles.icon}>
          {this.renderBars()}
        </div>
        {this.props.open ? null : this.renderTitle()}
      </div>
    );
  }

  renderTitle() {
    return <span className={styles.text}>Menu</span>;
  }

  renderBars() {
    const classes = classNames( {
      [`${styles.bar}`]: true,
      [`${styles.barHidden}`]: this.props.open
    });

    return (
      <div className={styles.bars}>
        <div className={classes}></div>
        <div className={classes}></div>
        <div className={classes}></div>
      </div>
    );
  }
}

MenuButton.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
};

MenuButton.defaultProps = {
  open: false
};

