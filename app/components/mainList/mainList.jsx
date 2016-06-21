import styles from './mainList.styl';

import React from 'react';

import store from './../../store/store';
import { spinSpinner, stopSpinner } from './../../actions/actions';

import ArticlePreview from './articlePreview';
import RoundButton from './../roundButton';
import Spinner from './../spinner';
import Plus from './../icons/plus';

// TODO: Replace with real data.
import data from '../../src/data.js';

export default class MainList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: data.articles,
      spinner: false
    };
    
    this.loadMore = this.loadMore.bind(this);
  }

  componentWillMount() {
    store.subscribe(() => {
      this.setState({ spinner: store.getState().spinner });
    });
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
        <div className={styles.loadMoreContainer}>
          <div className={styles.loadMoreIcon}>
            <Spinner spinning={this.state.spinner}><Plus /></Spinner>
          </div>
          <div className={styles.loadMoreIcon}>
            <RoundButton visible={!this.state.spinner} action={this.loadMore}><Plus /></RoundButton>
          </div>
        </div>
      </div>
    );
  }

  loadMore() {
    store.dispatch(spinSpinner());

    // REMOVE: Ajax simulation.
    setTimeout(() => {
      store.dispatch(stopSpinner());
      this.setState({
        articles: this.state.articles.concat(data.articles)
      });
    }, 2000);
  }
}
