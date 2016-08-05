import styles from './mainList.styl';

import React, { PropTypes } from 'react';

import ArticlePreview from './articlePreview';
import LoadMoreButton from '../../connectors/loadMoreButton';

const MainList = ({articles}) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      { articles.map((item, index) => {
        return (
          <li className={styles.item} key={index}>
            <ArticlePreview article={item} variation={index % 3 + 1} />
          </li> ); 
      }) }
    </ul>
    <LoadMoreButton />
  </div>
);

MainList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default MainList;
