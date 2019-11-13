import React from 'react';
import Movies from '../containers/movies';

export default class TopRate extends React.Component {
  render() {
    return <Movies type={2} navigation={this.props.navigation} />;
  }
}
