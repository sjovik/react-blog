import styles from './article.styl';

import React from 'react';

import Header from './header';
import List from './list';
import TextLink from '../textLink';
import BgImage from '../bgImage';

import fish from '../../src/img/fish.png';
import data from '../../src/data.js';

export default class Article extends React.Component {
  render() {
    const article = data.articles[0];
    const ingredients = article.ingredients; 
    const instructions = article.instructions;
    const link = 'http://systembolaget.se';

    return (
      <div className={styles.article}>
        <div><BgImage url={fish} /></div>
        <div className={styles.text}>
          <Header text={article.title} />
          <span className={styles.date}>26 April 2016</span>
          {ingredients.map(section => <List key={section.id} list={section.list} sectionHeader={section.sectionTitle} />)}
          <p>We used <TextLink url={link} text='this amazing wine'/> from systembolaget. It's a blend of chardonnay and sauvignon blanc.</p>
          {instructions.map(section => <p key={section.id}>{section.text}</p>)}
        </div>
      </div>
    );
  }
}
