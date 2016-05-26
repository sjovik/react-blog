import styles from './articlePreviewText.styl';

import React from 'react';

export default class ArticlePreviewText extends React.Component {
  render() {

    return (
      <div className={styles.container}>
        {this.props.article.title}
      </div>
    );
  }
}
