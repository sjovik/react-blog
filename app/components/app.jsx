import './../frame/index.styl';
import styles from './app.styl';

import React from 'react';
// import AltContainer from 'alt-container';

import Logo from './logo';
import Footer from './footer';
import MenuButton from './menu/menuButton';
import Menu from './menu/menu';

// TODO: Here for testing out different pages. Learn about route?
import MainList from './mainList/mainList';
import Article from './article/article';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  closeMenu() {
    this.setState({ menu: false });
  }

  render() {
    return (
      <div>
        <div className={styles.bodyWrapper}>
          <div className={styles.header}>
            <Logo centered={true} />
          </div>
          <MainList />
          <Footer></Footer>
          <Menu close={this.closeMenu} open={this.state.menu} />
          <MenuButton open={this.state.menu} onClick={this.toggleMenu} />
        </div>
      </div>
    );
  }
}
          // <Article />
