import Movies from './components/movies';
import Movie from './components/movie';
import TopRate from './components/topRate';
import NowPlaying from './components/nowPlaying';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MovieStack = createStackNavigator(
  {
    Movies,
    Movie,
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

// const TopRateStack = createStackNavigator({TopRate});
// TopRateStack.navigationOption = {
//   tabBarLabel: 'Top Rating',
//   tabBarOptions: {
//     activeTintColor: 'tomato',
//     inactiveTintColor: 'gray',
//   },
// };
// const NowPlayingStack = createStackNavigator({NowPlaying});
// NowPlayingStack.navigationOption = {
//   tabBarLabel: 'Now Playing',
//   tabBarOptions: {
//     activeTintColor: 'tomato',
//     inactiveTintColor: 'gray',
//   },
// };

const AppContainer = createAppContainer(
  createBottomTabNavigator({
    TopRate: {screen: MovieStack},
    NowPlaying: {screen: MovieStack},
  }),
);

export default AppContainer;
