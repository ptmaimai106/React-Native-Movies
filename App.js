import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppNavigator} from './AppNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Home: {screen: AppNavigator},
      Settings: {screen: AppNavigator},
    },
    {
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Settings') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
        },
      },
      animationEnabled: false,
      swipeEnabled: false,
    },
  ),
);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
