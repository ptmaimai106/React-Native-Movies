import {connect} from 'react-redux';
import Movies from '../components/movies';

const mapStateToProps = state => ({
  favoriteList: state.movieReducer,
});

export default connect(
  mapStateToProps,
  null,
)(Movies);
