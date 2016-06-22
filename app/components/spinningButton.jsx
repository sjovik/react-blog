import styles from './spinningButton.styl';

import React, { PropTypes } from 'react';

import RoundButton from './roundButton';
import Spinner from './spinner';
import Plus from './icons/plus';

const SpinningButton = ({spinning, action}) => (
  <div className={styles.loadMoreContainer}>
    <div className={styles.loadMoreIcon}>
      <Spinner spinning={spinning}><Plus /></Spinner>
    </div>
    <div className={styles.loadMoreIcon}>
      <RoundButton visible={!spinning} action={action}><Plus /></RoundButton>
    </div>
  </div>
);

SpinningButton.propTypes = {
  spinning: PropTypes.bool,
  action: PropTypes.func.isRequired
};

export default SpinningButton;
