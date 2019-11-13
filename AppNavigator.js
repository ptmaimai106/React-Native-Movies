import Movie from './containers/movie';
import NowPlaying from './components/nowPlaying';
import TopRate from './components/topRate';
import Favorite from './components/favorite';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

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

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  console.log(routeName);
  let iconName;
  if (routeName === 'NowPlaying') {
    iconName = 'video';
  } else if (routeName === 'TopRate') {
    iconName = 'star';
  }
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Icon name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      NowPlaying: {
        screen: NowPlayingStack,
        navigationOptions: {
          tabBarLabel: 'Now Playing',
        },
        defaultNavigationOptions: ({navigation}) => ({
          tabBarIcon: ({focused, tintColor}) =>
            getTabBarIcon(navigation, focused, tintColor),
        }),
      },
      TopRate: {
        screen: TopRateStack,
        navigationOptions: {
          tabBarLabel: 'Top Rate',
        },
        defaultNavigationOptions: ({navigation}) => ({
          tabBarIcon: ({focused, tintColor}) =>
            getTabBarIcon(navigation, focused, tintColor),
        }),
      },
      Favorite: {
        screen: Favorite,
        navigationOptions: {
          tabBarLabel: 'Favorite',
          title: 'Favorite Movies',
        },
        defaultNavigationOptions: ({navigation}) => ({
          tabBarIcon: ({focused, tintColor}) =>
            getTabBarIcon(navigation, focused, tintColor),
        }),
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
