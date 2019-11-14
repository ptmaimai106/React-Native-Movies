import {connect} from 'react-redux';
import Movie from '../components/movie';

const mapStateToProps = state => ({
  favoriteList: state.movieReducer,
});

export default connect(
  mapStateToProps,
  null,
)(Movie);
