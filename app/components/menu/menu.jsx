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

    this.openSubmenu = this.openSubmenu.bind(this);
    this.closeSubmenu = this.closeSubmenu.bind(this);
  }

  openSubmenu(text) {
    if (this.state.submenu === text) return this.closeSubmenu();

    this.setState({submenu: text});
  }

  closeSubmenu() {
    this.setState({ submenuAnimating: true });

    setTimeout(() => {
      this.setState({submenu: false, submenuAnimating: false}); 
    }, 400);
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
              return <NavLink link={item} key={index} openSubmenu={this.openSubmenu} close={this.props.close} />;
            })}
          </ul>
          {this.state.submenu ? this.renderSubmenu() : null}
        </nav>
      </div>
    );
  }

  renderSubmenu() {
    return <SubMenu title={this.state.submenu} 
                    menu={submenuCategories} 
                    animating={this.state.submenuAnimating} 
                    openSubmenu={this.openSubmenu}
                    closeSubmenu={this.closeSubmenu} 
                    close={this.props.close} />;
  }
}

Menu.propTypes = { close: React.PropTypes.func, open: React.PropTypes.bool };
Menu.defaultProps = { open: true };
