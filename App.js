import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppNavigator} from './AppNavigator';

const ScreenStack = createAppContainer(AppNavigator);
const AppContainer = createAppContainer(
  createBottomTabNavigator({
    NowPlaying: {screen: ScreenStack},
    TopRate: {screen: ScreenStack},
  }),
);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
