import styles from './articlePreview.styl';

import React from 'react';

import BgImage from '../bgImage';

// TODO: replace with real data.
import articleImage from '../../src/img/summer_roll.png';

export default class ArticlePreview extends React.Component {
  render() {

    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <BgImage url={articleImage} background={true} />
        </div>
      </div>
    );
  }
}
