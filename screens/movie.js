import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Movie extends React.Component {
  render() {
    return (
      <View style={styles.movie}>
        <Text>MOVIE DETAIL SCREEN</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Movie')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movie: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
