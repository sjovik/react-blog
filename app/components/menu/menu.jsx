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
      submenu: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(text, submenu) {
    if (submenu) return this.setState({submenu: text});

    if (text === 'back') {
      return setTimeout(() => {
        this.setState({submenu: false}); 
      }, 400);
    }

    // TODO: Links to site sections, routes?
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
              return <NavLink submenu={item.submenu} key={index} onClick={this.onClick} text={item.text} />;
            })}
          </ul>
          {this.state.submenu ? this.renderSubmenu() : null}
        </nav>
      </div>
    );
  }

  renderSubmenu() {
    return <SubMenu title={this.state.submenu} menu={submenuCategories} onClick={this.onClick} />;
  }
}

Menu.propTypes = { close: React.PropTypes.func, open: React.PropTypes.bool };
Menu.defaultProps = { open: true };
