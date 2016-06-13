import styles from './mainList.styl';

import React from 'react';

import ArticlePreview from './articlePreview';
import LoadMoreButton from './loadMoreButton';
import Spinner from './../spinner';
import Plus from './../icons/plus';

// TODO: Replace with real data.
import data from '../../src/data.js';

export default class MainList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: data.articles
    };

    this.loadMore = this.loadMore.bind(this);
  }

  render() {
    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          {
            this.state.articles.map((item, index) => {
              return <li className={styles.item} key={index}><ArticlePreview article={item} type={index % 3 + 1} /></li>; 
            })
          }
        </ul>
        <div className={styles.loadMoreContainer}>
          {this.state.loadingArticles ? <Spinner><Plus /></Spinner> : <LoadMoreButton loadMore={this.loadMore} />}
        </div>
      </div>
    );
  }

  loadMore() {
    this.setState({loadingArticles: true});

    // REMOVE: Ajax simulation.
    setTimeout(() => {
      this.setState({
        loadingArticles: false,
        articles: this.state.articles.concat(data.articles)
      });
    }, 2000);
  }
}
