import styles from './menu.styl';

import React from 'react';
import classNames from 'classnames';

import NavLink from './navLink';
import SubMenu from './subMenu';
import BgImage from '../bgImage';
import {menu, submenuCategories} from './statics';

// import sardinepattern from '../../src/img/sardine-pattern.jpg';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submenu: false,
      submenuAnimating: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(text, submenu) {
    // Toggle for double click, mostly for middle screen sizes
    if (submenu && this.state.submenu === text) text = 'back';

    if (text === 'back') {
      this.setState({ submenuAnimating: true });

      return setTimeout(() => {
        this.setState({submenu: false, submenuAnimating: false}); 
      }, 400);
    }

    if (submenu) return this.setState({submenu: text});

    // TODO: Links to site sections, routes?
    this.props.close(); 
  }

  render() {
    const areaClass = classNames({
      [`${styles.area}`]: true,
      [`${styles.areaHidden}`]: !this.props.open
    });
    // const bgimage = {
    //   width: '700px',
    //   position: 'absolute',
    //   top: '-20px',
    //   left: '-20px',
    //   height: '500px',
    //   zIndex: '-1'
    // };
    // <BgImage url={sardinepattern} dim={{ height: '450px' }} background={true} />

    return (
      <div className={areaClass}>
        <nav>
          <ul className={styles.navList}>
            {menu.map((item, index) => {
              return <NavLink submenu={item.submenu} key={index} onClick={this.onClick} text={item.text} />;
            })}
          </ul>
          {this.state.submenu ? this.renderSubmenu() : null}
        </nav>
      </div>
    );
  }

  renderSubmenu() {
    return <SubMenu title={this.state.submenu} menu={submenuCategories} animating={this.state.submenuAnimating} onClick={this.onClick} />;
  }
}

Menu.propTypes = { close: React.PropTypes.func, open: React.PropTypes.bool };
Menu.defaultProps = { open: true };
