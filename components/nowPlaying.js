import React from 'react';
import Movies from './movies';

export default class NowPlaying extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Now Playing!',
  };
  render() {
    return <Movies type={1} navigation={this.props.navigation} />;
  }
}
