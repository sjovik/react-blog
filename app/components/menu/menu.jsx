import styles from './menu.styl';

import React from 'react';
import classNames from 'classnames';

import NavLink from './navLink';
import SubMenu from './subMenu';
import {menu, submenuCategories} from './statics';

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

    this.props.close(); 
  }

  render() {
    const areaClass = classNames({
      [`${styles.area}`]: true,
      [`${styles.areaHidden}`]: !this.props.open
    });

    return (
      <div className={areaClass}>
        <nav>
          <ul className={styles.navList}>
            {menu.map((item, index) => {
              return <NavLink link={item} key={index} onClick={this.onClick} />;
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
