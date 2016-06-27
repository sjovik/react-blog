import { connect } from 'react-redux';
import { closeMenu } from '../actions/actions';

import Menu from '../components/menu/menu';

const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: state.menu === ownProps.menu,
    menu: ownProps.menu
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    close: () => {
      dispatch(closeSubMenu(ownProps.subMenu))
    }
  };
};

const OpenMenu = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Menu);

export default OpenMenu;
