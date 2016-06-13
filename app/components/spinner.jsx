import styles from './spinner.styl';

import React from 'react';

const Spinner = ({children}) => (
  <div className={styles.spinner}>
    {children}
  </div>
);

export default Spinner;
