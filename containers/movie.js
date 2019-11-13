import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Movie from '../components/movie';

const mapStateToProps = state => ({
  favoriteList: state.favoriteList,
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
)(Movie);
