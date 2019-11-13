import React from 'react';
import Movies from '../containers/movies';

export default class NowPlaying extends React.Component {
  render() {
    return <Movies type={1} navigation={this.props.navigation} />;
  }
}
