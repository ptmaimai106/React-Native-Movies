import Movie from './containers/movie';
import NowPlaying from './components/nowPlaying';
import TopRate from './components/topRate';
import Favorite from './containers/favorite';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

const NowPlayingStack = createStackNavigator(
  {
    NowPlaying,
    Movie,
  },
  {
    initialRouteName: 'NowPlaying',
    defaultNavigationOptions: {
      title: 'NOW PLAYING MOVIES',
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
      title: 'TOP RATING MOVIE',
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

const FavoriteStack = createStackNavigator(
  {
    Favorite,
    Movie,
  },
  {
    initialRouteName: 'Favorite',
    defaultNavigationOptions: {
      title: 'FAVORITE MOVIES',
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
          tabBarIcon: ({tintColor}) => (
            <Icon name="camera" size={25} color={tintColor} />
          ),
        },
      },
      TopRate: {
        screen: TopRateStack,
        navigationOptions: {
          tabBarLabel: 'Top Rate',
          tabBarIcon: ({tintColor}) => (
            <Icon name="star" size={25} color={tintColor} />
          ),
        },
      },
      Favorite: {
        screen: FavoriteStack,
        navigationOptions: {
          tabBarLabel: 'Favorite',
          tabBarIcon: ({tintColor}) => (
            <Icon name="heart" size={25} color={tintColor} />
          ),
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
