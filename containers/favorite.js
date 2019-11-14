import {connect} from 'react-redux';
import Favorite from '../components/favorite';

const mapStateToProps = state => ({
  favoriteList: state.movieReducer,
});

export default connect(
  mapStateToProps,
  null,
)(Favorite);
