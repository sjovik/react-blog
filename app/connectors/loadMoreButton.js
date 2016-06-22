import { connect } from 'react-redux';
import { toggleSpinner, fetchArticles } from '../actions/actions';

import SpinningButton from '../components/spinningButton';

const loadMore = () => {
  const promise = new Promise((res) => {
    setTimeout(() => {
      res();
    }, 2000);
  });

  return promise;
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

      loadMore().then(() => {
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
