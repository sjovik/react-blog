import { connect } from 'react-redux';
import { toggleSubMenu } from '../actions/actions';

import SubMenu from '../components/menu/subMenu';

const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: state.menu.subMenus.indexOf(ownProps.id) > -1
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    close: () => {
      dispatch(toggleSubMenu(ownProps.id));
    }
  };
};

const OpenSubmenu = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SubMenu);

export default OpenSubmenu;
