import { connect } from 'react-redux';
import { toggleMenu, toggleSubMenu } from '../actions/actions';

import NavLink from '../components/menu/navLink';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    close: () => {
      dispatch(toggleMenu(false));
    },
    toggleSubMenu: () => {
      dispatch(toggleSubMenu(ownProps.link.submenu));
    }
  };
};

const MenuLink = connect(null, mapDispatchToProps)(NavLink);

export default MenuLink;
