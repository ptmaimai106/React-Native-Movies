import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Movie extends React.Component {
  static navigationOptions = {
    title: 'MOVIE',
  };
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>MOVIE DETAIL</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  movie: {
    flex: 1,
    padding: 20,
  },
});
