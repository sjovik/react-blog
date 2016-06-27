import styles from './spinner.styl';

import React, { PropTypes } from 'react';

const Spinner = ({spinning, children}) => 
  <div className={styles.spinner} data-spinning={spinning}>{children}</div>;

Spinner.propTypes = {
  spinning: PropTypes.bool,
  children: PropTypes.node
};

Spinner.defaultProps = {
  spinning: false
};

export default Spinner;
