import styles from './bgImage.styl';

import React from 'react';

/**
 * A component for displaying image as a div with background covering the area keeping aspect ratio.
 * @param  {string} url         - Url to the image.
 * @param  {object} [dim]       - Dimensions for the image.
 *   @param  {string} [dim.width]   - Width of the image, default 100%
 *   @param  {string} [dim.height]  - Height of the image, default 100%         
 * @param  {bool} [background]  - If true, the image will be set as absolute and 100% w/h
 * @return {ReactElement}       - Markup
 */
const BgImage = ({url, dim, background}) => {
  const imageStyle = {
    position: background ? 'absolute ' : 'relative',
    background: `url(${url}) no-repeat center center`,
    backgroundSize: 'cover',
    width: `${(dim && !background ? dim.width : '100%')}`,
    height: `${(dim && !background ? dim.height : '100%')}`
  };

  return (
    <div style={imageStyle} className={styles.image} ></div>
  );
};

BgImage.propTypes = { 
  url: React.PropTypes.string.isRequired, 
  dim: React.PropTypes.object,
  background: React.PropTypes.bool
};

export default BgImage;
