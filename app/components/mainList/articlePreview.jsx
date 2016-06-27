import styles from './articlePreview.styl';

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import BgImage from '../bgImage';
import PreviewText from './articlePreviewText';

const ArticlePreview = ({article, type}) => {
  const typeClasses = classNames({
    [`${styles.container}`]: true,
    [`${styles.rightStanding}`]: (type === 2),
    [`${styles.right}`]: (type === 3)
  });

  return (
    <div className={typeClasses}>
      <Link to={`/article/${article.id}`}>
        <div className={styles.imageContainer}>
          <BgImage url={article.titleImage} background={true} />
        </div>
        <div className={styles.textContainer}> 
          <PreviewText article={article} />
        </div>
      </Link>
    </div>
  );
};

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

export default ArticlePreview;
