import styles from './articlePreview.styl';

import React from 'react';
import classNames from 'classnames';

import BgImage from '../bgImage';
import PreviewText from './articlePreviewText';

export default class ArticlePreview extends React.Component {
  render() {
    // const typeClass = this.props.type;

    const typeClass = classNames({
      [`${styles.container}`]: true,
      [`${styles.rightStanding}`]: (this.props.type === 2),
      [`${styles.right}`]: (this.props.type === 3)
    });

    return (
      <div className={typeClass}>
        <div className={styles.imageContainer}>
          <BgImage url={this.props.article.titleImage} background={true} />
        </div>
        <div className={styles.textContainer}> 
          <PreviewText article={this.props.article} />
        </div>
      </div>
    );
  }
}

ArticlePreview.propTypes = {
  article: React.PropTypes.object,
  type: function(props, propName, componentName) {
    if (!/[1-3]/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Needs to be a number between 1 and 3.'
      );
    }
  }
};
