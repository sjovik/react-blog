import styles from './articlePreviewText.styl';

import React from 'react';

export default class ArticlePreviewText extends React.Component {
  render() {

    return (
      <div className={styles.container}>
        <h2 className={styles.h2}>{this.props.article.title}</h2>
      </div>
    );
  }
}
