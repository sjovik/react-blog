import styles from './list.styl';

import React from 'react';

export default class List extends React.Component {
  render() {
    return (
      <ul className={styles.list}>
        {this.props.sectionHeader ? this.renderSectionHeader() : null}
        {this.props.list.map(item => 
          this.renderListItem(item)
        )}
      </ul>
    );
  }

  renderSectionHeader() {
    return <h3 className={styles.sectionHeader}>{this.props.sectionHeader}</h3>;
  }

  renderListItem(item) {
    return <li key={item.id} className={styles.listitem}>{item.text}</li>;
  }
};
