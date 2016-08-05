import styles from './articlePreview.styl';

import React from 'react';
import { Link } from 'react-router';

import BgImage from '../bgImage';
import PreviewText from './articlePreviewText';

const getVariationClass = (variation) => {
  if (!variation || variation === 1) return;
  if (variation === 2) return styles.rightStanding;
  if (variation === 3) return styles.right;
};

const ArticlePreview = ({article, variation}) => {
  return (
    <div className={`${styles.container} ${getVariationClass(variation)}`}>
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
  variation: function(props, propName, componentName) {
    if (!/[1-3]/.test(props[propName])) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Needs to be a number between 1 and 3.`
      );
    }
  }
};

export default ArticlePreview;
