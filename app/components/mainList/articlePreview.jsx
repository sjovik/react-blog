import styles from './articlePreview.styl';

import React from 'react';

import BgImage from '../bgImage';
import PreviewText from './articlePreviewText';

export default class ArticlePreview extends React.Component {
  render() {
    const imageClass = 'imageContainer' + this.props.type;

    return (
      <div className={styles.container}>
        <div className={styles.textContainer}> 
          <PreviewText article={this.props.article} />
        </div>
        <div className={styles[imageClass]}>
          <BgImage url={this.props.article.titleImage} background={true} />
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
