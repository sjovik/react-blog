import styles from './articlePreviewText.styl';

import React from 'react';
import {formatDate} from  '../../libs/utils';

const ArticlePreviewText = ({article}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>{article.title}</h2>
      <span className={styles.date}>{formatDate(article.date)}</span>
    </div>
  );
};

ArticlePreviewText.propTypes = { 
  article: React.PropTypes.object
};

ArticlePreviewText.defaultProps = {
  article: {
    title: '',
    date: ''
  } 
};

export default ArticlePreviewText;
