import styles from './list.styl';

import React, { PropTypes} from 'react';

const List = ({sectionHeader, list}) => {
  const renderSectionHeader = () => {
    return <h3 className={styles.sectionHeader}>{sectionHeader}</h3>;
  };

  const renderListItem = (item) => {
    return <li key={item.id} className={styles.listitem}>{item.text}</li>;
  };

  return (
    <ul className={styles.list}>
      {sectionHeader ? renderSectionHeader() : null}
      {list.map(item => 
        renderListItem(item)
      )}
    </ul>
  );
};

List.propTypes = {
  sectionHeader: PropTypes.string,
  list: PropTypes.array.isRequired
};

export default List;
