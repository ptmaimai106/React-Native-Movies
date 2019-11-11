import Movies from './screens/movies';
import Movie from './screens/movie';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Movies: {
    screen: Movies,
  },
  Movie: {
    screen: Movie,
  },
});

export default AppNavigator;
