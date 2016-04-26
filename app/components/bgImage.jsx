import styles from './bgImage.styl';

import React from 'react';

const BgImage = ({url}) => {
  const imageStyle = {
    backgroundImage: 'url(' + url + ')'
  };

  return (
    <div style={imageStyle} className={styles.image} />
  );
};

BgImage.propTypes = { url: React.PropTypes.string.isRequired };

export default BgImage;
