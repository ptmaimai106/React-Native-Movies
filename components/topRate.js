import React from 'react';
import Movies from './movies';

export default class TopRate extends React.Component {
  render() {
    return <Movies type={2} />;
  }
}