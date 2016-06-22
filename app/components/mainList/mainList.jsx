import styles from './mainList.styl';

import React from 'react';

import ArticlePreview from './articlePreview';
import LoadMore from '../../containers/loadMore';

// TODO: Replace with real data.
import data from '../../src/data.js';

export default class MainList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: data.articles
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          { this.state.articles.map((item, index) => {
            return (
              <li className={styles.item} key={index}>
                <ArticlePreview article={item} type={index % 3 + 1} />
              </li>); 
          }) }
        </ul>
        <LoadMore />
      </div>
    );
  }
}
