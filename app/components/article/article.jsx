import styles from './article.styl';

import React from 'react';

import Header from './header';
import List from './list';
import TextLink from '../textLink';
import BgImage from '../bgImage';

import data from '../../src/data.js';

export default class Article extends React.Component {
  render() {
    const article = this.fetchArticle(parseInt(this.props.params.articleId));

    return (
      <div className={styles.article}>
        <BgImage url={article.titleImage} dim={{ height: '400px' }} />
        <div className={styles.text}>
          <Header text={article.title} />
          <span className={styles.date}>{article.date}</span>
          {article.ingredients.map(section => <List key={section.id} list={section.list} sectionHeader={section.sectionTitle} />)}
          <p>We used <TextLink text='this amazing wine'/> from systembolaget. It's a blend of chardonnay and sauvignon blanc.</p>
          {article.instructions.map(section => <p key={section.id}>{section.text}</p>)}
        </div>
      </div>
    );
  }

  /** 
   * Get article by id. Replace data with database connection.
   */
  fetchArticle(id) {
    return data.articles.find(article => article.id === id);
  }
}

Article.propTypes = {
  params: React.PropTypes.object
};
