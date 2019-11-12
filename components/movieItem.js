import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import img from '../assert/img.jpg';

export default class MovieItem extends Component {
  render() {
    const {movie, list} = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Movie', {
            detail: movie,
            src: img,
          })
        }>
        {list ? (
          <View style={styles.container}>
            <Image style={styles.img} source={img} />
            <View style={styles.body}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.description} numberOfLines={4}>
                {movie.overview}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.container1}>
            <Image source={img} style={styles.img1} />
            <Text style={styles.title}>{movie.title}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 8,
    shadowColor: '#ffff',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#e4e5ee',
  },
  container1: {
    shadowColor: '#ffff',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flex: 1,
    width: 170,
    marginHorizontal: 5,
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
    borderRadius: 5,
    backgroundColor: '#e4e5ee',
  },
  img1: {
    width: 140,
  },
  body: {
    height: 140,
    flex: 7,
  },
  img: {
    flex: 3,
    height: 130,
    width: 100,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    paddingTop: 10,
    fontSize: 15,
  },
});
