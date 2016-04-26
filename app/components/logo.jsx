import styles from './logo.styl';

import React from 'react';

import logo from '../src/img/logo.png';

const Logo = ({centered}) => {
  return (
    <div>
      <img className={(centered ? styles.centered : null) + ' ' + styles.logo} src={logo} />
    </div>
  );
};

Logo.propTypes = { centered: React.PropTypes.bool};
Logo.defaultProps = { centered: true };

export default Logo;
