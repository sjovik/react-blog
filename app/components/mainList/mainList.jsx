import styles from './mainList.styl';

import React from 'react';

// TODO: Replace with real data.
import data from '../../src/data.js';

export default class MainList extends React.Component {
  render() {
    const articles = data.articles;

    return (
      <div className={styles.listContainer}>
        <ul>
          
        </ul>
      </div>
    );
  }
}
