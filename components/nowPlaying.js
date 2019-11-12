import React from 'react';
import Movies from './movies';

export default class NowPlaying extends React.Component {
  render() {
    return <Movies type={1} />;
  }
}
