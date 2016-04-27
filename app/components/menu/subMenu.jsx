import styles from './subMenu.styl';

import React from 'react';

import NavLink from './navLink';

export default class SubMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: false
    };

    this.onClick = this.onClick.bind(this);
  } 

  onClick(text, submenu) {
    if (text === 'back') this.setState({ animating: true });

    this.props.onClick(text);
  }

  render() {
    return (
      <div className={styles.container} data-animating={this.state.animating}>
        <ul className={styles.navList}>
          <li className={styles.header} onClick={this.onClick.bind(null, 'back')} >{'< back'}</li>
          {this.props.menu.map((item, index) => {
            return <NavLink key={index} text={item.text} onClick={this.onClick} />
          })}
        </ul>
      </div>
    );
  }
}

SubMenu.propTypes = { 
  onClick: React.PropTypes.func.isRequired,
  menu: React.PropTypes.array
};
