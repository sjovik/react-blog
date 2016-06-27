import styles from './articlePreviewText.styl';

import React from 'react';
import {formatDate} from  '../../libs/utils';

const ArticlePreviewText = ({article}) => (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      <h2 className={styles.h2}>{article.title}</h2>
    </div>
    <span className={styles.date}>{formatDate(article.date)}</span>
  </div>
);

ArticlePreviewText.propTypes = { 
  article: React.PropTypes.object.isRequired
};

export default ArticlePreviewText;
