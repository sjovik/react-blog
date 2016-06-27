import { connect } from 'react-redux';

import Menu from '../components/menu/menu';

const mapStateToProps = (state) => {
  return {
    isOpen: state.menu.open
  };
};

const OpenMenu = connect(mapStateToProps)(Menu);

export default OpenMenu;
