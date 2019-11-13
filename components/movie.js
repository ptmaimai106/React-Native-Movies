import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Detail from './movieDetail';

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
    return (
      <View style={styles.container}>
        <Text>{detail.title}</Text>
        <Image
          style={styles.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${detail.poster_path}`,
          }}
        />
        <Detail detail={detail} />
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
