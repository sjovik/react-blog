import styles from './articlePreview.styl';

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import BgImage from '../bgImage';
import PreviewText from './articlePreviewText';

export default class ArticlePreview extends React.Component {
  render() {
    const { article, type } = this.props;
    const typeClass = classNames({
      [`${styles.container}`]: true,
      [`${styles.rightStanding}`]: (type === 2),
      [`${styles.right}`]: (type === 3)
    });
    const url = `/article/${article.id}`;

    return (
      <div className={typeClass}>
        <Link to={url}>
          <div className={styles.imageContainer}>
            <BgImage url={article.titleImage} background={true} />
          </div>
          <div className={styles.textContainer}> 
            <PreviewText article={article} />
          </div>
        </Link>
      </div>
    );
  }
}

ArticlePreview.propTypes = {
  article: React.PropTypes.object,
  type: function(props, propName, componentName) {
    if (!/[1-3]/.test(props[propName])) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Needs to be a number between 1 and 3.`
      );
    }
  }
};
