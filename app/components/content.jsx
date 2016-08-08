import styles from './content.styl';

import React, { PropTypes } from 'react';
import MainMenuButton from '../connectors/mainMenuButton';

const Content = ({pushed, content}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.contentWrapper} ${pushed ? styles.contentWrapperPushed : ''}`}>
        <MainMenuButton />
        {content}
      </div>
    </div>
  );
}

Content.propTypes = {
  content: PropTypes.node.isRequired
}

export default Content;
