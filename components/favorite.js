import React from 'react';
import Movies from '../containers/movies';

export default class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.favoriteList,
    };
  }

  render() {
    return (
      <Movies
        type={0}
        navigation={this.props.navigation}
        data={this.state.data}
      />
    );
  }
}
