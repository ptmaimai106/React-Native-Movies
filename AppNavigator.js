import Movie from './containers/movie';
import NowPlaying from './components/nowPlaying';
import TopRate from './components/topRate';
import Favorite from './components/favorite';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

// import Icon from 'react-native-vector-icons/Ionicons';

const NowPlayingStack = createStackNavigator(
  {
    NowPlaying,
    Movie,
  },
  {
    initialRouteName: 'NowPlaying',
    defaultNavigationOptions: {
      title: 'MOVIES',
      headerStyle: {
        backgroundColor: '#c5dfee',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
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
      title: 'MOVIES',
      headerStyle: {
        backgroundColor: '#c5dfee',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      NowPlaying: {
        screen: NowPlayingStack,
        navigationOptions: {
          tabBarLabel: 'Now Playing',
          // tabBarIcon: ({tintColor}) => (
          //   // eslint-disable-next-line react/react-in-jsx-scope
          //   <Icon name="ios-home" size={25} color={tintColor} />
          // ),
        },
      },
      TopRate: {
        screen: TopRateStack,
        navigationOptions: {
          tabBarLabel: 'Top Rate',
        },
      },
      Favorite: {
        screen: Favorite,
        navigationOptions: {
          tabBarLabel: 'Favorite',
          title: 'Favorite Movies',
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          marginBottom: 10,
        },
      },
    },
  ),
);
