import { connect } from 'react-redux';

import MainList from '../components/mainList/mainList';

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

const PopulatedMainList = connect(
  mapStateToProps
)(MainList);

export default PopulatedMainList;
