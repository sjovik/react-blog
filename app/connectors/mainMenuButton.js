import { connect } from 'react-redux';
import { toggleMenu } from '../actions/actions';

import MenuButton from '../components/menu/menuButton';

const mapStateToProps = (state) => {
  return {
    isOpen: state.menu.open
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleMenu: (isOpen) => {
      dispatch(toggleMenu(isOpen));
    }
  };
};

const MainMenuButton = connect(mapStateToProps, mapDispatchToProps)(MenuButton);

export default MainMenuButton;
