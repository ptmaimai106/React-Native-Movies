import React from 'react';
import Movies from '../containers/movies';

export default class Favorite extends React.Component {
  render() {
    return <Movies type={0} navigation={this.props.navigation} />;
  }
}
