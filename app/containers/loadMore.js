import { connect } from 'react-redux';
import { toggleSpinner } from '../actions/actions';

import SpinningButton from '../components/spinningButton';

const loadMore = (cb) => {
  // REMOVE: Ajax simulation.
  setTimeout(() => {
    cb();
  }, 2000);
};

const mapStateToProps = (state) => {
  return {
    spinning: state.spinner 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: () => {
      dispatch(toggleSpinner(true));

      loadMore(() => {
        dispatch(toggleSpinner(false));
      });
    }
  };
};

const LoadMore = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SpinningButton);

export default LoadMore;
