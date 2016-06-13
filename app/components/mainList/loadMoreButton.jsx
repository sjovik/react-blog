import styles from './loadMoreButton.styl';

import React from 'react';

import Plus from './../icons/plus';

export default class LoadMoreButton extends React.Component {
  render() {
    return (
      <div className={styles.button} onClick={this.props.loadMore}>
        <Plus />
      </div>
    );
  }
}

LoadMoreButton.propTypes = { 
  loadMore: React.PropTypes.func.isRequired
};
