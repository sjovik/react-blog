import { connect } from 'react-redux';

import Content from '../components/content';

const mapStateToProps = (state) => {
  return {
    pushed: state.menu.open
  };
};

const PushableContent = connect(mapStateToProps)(Content);

export default PushableContent;
