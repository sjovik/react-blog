import { connect } from 'react-redux';
import { toggleMenu, toggleSubMenu } from '../actions/actions';

import NavLink from '../components/menu/navLink';

const mapStateToProps = (state, ownProps) => {
  return {
    subMenuIsOpen: ((!ownProps.link.submenu) ? false : state.menu.subMenus.indexOf(ownProps.link.submenu) > -1)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeMenu: () => {
      dispatch(toggleMenu(false));
    },
    toggleSubMenu: () => {
      dispatch(toggleSubMenu(ownProps.link.submenu));
    }
  };
};

const MenuLink = connect(mapStateToProps, mapDispatchToProps)(NavLink);

export default MenuLink;
