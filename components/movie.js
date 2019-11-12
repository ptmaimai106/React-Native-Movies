import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
export default class Movie extends React.Component {
  static navigationOptions = {
    title: 'MOVIE',
  };
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  render() {
    const {navigation} = this.props;
    const detail = navigation.getParam('detail');
    const poster = JSON.stringify(navigation.getParam('src'));
    return (
      <View style={styles.container}>
        <Text>{detail.title}</Text>
        <Image source={poster} style={styles.poster} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  poster: {
    flex: 1,
    width: 330,
    resizeMode: 'cover',
    shadowColor: '#ffff',
    shadowRadius: 10,
  },
});
