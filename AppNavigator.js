import Movie from './components/movie';
import NowPlaying from './components/nowPlaying';
import TopRate from './components/topRate';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {createStackNavigator} from 'react-navigation-stack';

const NowPlayingStack = createStackNavigator(
  {
    NowPlaying,
    Movie,
  },
  {
    initialRouteName: 'NowPlaying',
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

const TopRateStack = createStackNavigator(
  {
    TopRate,
    Movie,
  },
  {
    initialRouteName: 'TopRate',
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

export default createAppContainer(
  createBottomTabNavigator(
    {
      NowPlaying: {screen: NowPlayingStack},
      TopRate: {screen: TopRateStack},
    },
    {
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  ),
);
