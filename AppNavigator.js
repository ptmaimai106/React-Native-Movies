import Movies from './screens/movies';
import Movie from './screens/movie';
import {createStackNavigator} from 'react-navigation-stack';

export const AppNavigator = createStackNavigator(
  {
    Movies: Movies,
    Movie: Movie,
  },
  {
    initialRouteName: 'Movies',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
);
