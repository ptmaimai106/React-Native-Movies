import {connect} from 'react-redux';
import * as actions from '../actions/index';
import MovieItem from '../components/movieItem';

const mapStateToProps = state => ({
  favoriteList: state.movieReducer,
});

const mapDispatchToProps = dispatch => {
  return {
    addToFavorite: item => {
      dispatch(actions.addToFavorite(item));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieItem);
