import { connect } from 'react-redux';
import { toggleSpinner, fetchArticles } from '../actions/actions';

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
        dispatch(fetchArticles());
        dispatch(toggleSpinner(false));
      });
    }
  };
};

const LoadMoreButton = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SpinningButton);

export default LoadMoreButton;
