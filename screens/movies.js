import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Movies extends React.Component {
  render() {
    return (
      <View style={styles.movies}>
        <Text>MOVIES LIST</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Movie')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movies: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
