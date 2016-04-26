import styles from './textLink.styl';

import React from 'react';

const TextLink = ({url, text}) => <a href={url} className={styles.link}>{text}</a>;

TextLink.propTypes = {
  url: React.PropTypes.string,
  text: React.PropTypes.string.isRequired
};

TextLink.defaultProps = {
  url: '#'
};

export default TextLink;
