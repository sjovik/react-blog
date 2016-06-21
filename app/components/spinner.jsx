import styles from './spinner.styl';

import React from 'react';

const Spinner = ({spinning, children}) => (
    <div className={styles.spinner} data-spinning={spinning}>
      {children}
    </div>
);

Spinner.propTypes = {
  spinning: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node
};

Spinner.defaultProps = {
  spinning: false
};

export default Spinner;
