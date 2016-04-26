import './../frame/index.styl';
import styles from './app.styl';

import React from 'react';
// import AltContainer from 'alt-container';

import Article from './article';
import Logo from './logo';
import Footer from './footer';
import MenuButton from './menuButton';
import Menu from './menu';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    return (
      <div>
        <div className={styles.bodyWrapper}>
          <div className={styles.header}>
            <Logo centered={true} />
          </div>
          <Article />
          <Footer><a href="#">hello</a></Footer> 
          {this.state.menu ? this.renderMenu() : null }
          <MenuButton open={this.state.menu} onClick={this.toggleMenu} />
        </div>
      </div>
    );
  }

  renderMenu() { return <Menu />; }
}
