import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppNavigator} from './AppNavigator';

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Home: {screen: AppNavigator},
      Settings: {screen: AppNavigator},
    },
    {
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
