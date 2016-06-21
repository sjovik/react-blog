import styles from './roundButton.styl';

import React from 'react';

const RoundButton = ({action, visible, children}) =>
  <div className={styles.button} data-visible={visible} onClick={action}>{children}</div>;

RoundButton.propTypes = {
  action: React.PropTypes.func.isRequired,
  children: React.PropTypes.node,
  visible: React.PropTypes.bool
};

RoundButton.defaultProps = { 
  visible: true
};

export default RoundButton;
