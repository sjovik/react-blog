import styles from './mainList.styl';

import React from 'react';

import ArticlePreview from './articlePreview';

// TODO: Replace with real data.
import data from '../../src/data.js';

const MainList = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        { 
          data.articles.map((item, index) => {
            return <li className={styles.item} key={index}><ArticlePreview article={item} type={index % 3 + 1} /></li>; 
          })
        }
      </ul>
    </div>
  ); 
};

export default MainList;
