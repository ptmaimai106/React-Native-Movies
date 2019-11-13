import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MovieItem extends Component {
  render() {
    const {movie, list} = this.props;
    const imgPathBase = 'https://image.tmdb.org/t/p/w500/';
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Movie', {
            detail: movie,
          })
        }>
        {list ? (
          <View style={styles.container}>
            <Image
              style={styles.img}
              source={{
                uri: `${imgPathBase}${movie.backdrop_path}`,
              }}
            />
            <View style={styles.body}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {movie.overview}
              </Text>
              <View style={styles.icon}>
                <Icon name='heart' size={20}></Icon>
                <Icon name='star' size={20} color='orange' style={styles.liked}>  </Icon>
                <Text>{movie.vote_average}</Text>
              </View>
             
            </View>
          </View>
        ) : (
          <View style={styles.container1}>
            <Image
              style={styles.img1}
              source={{
                uri: `${imgPathBase}${movie.backdrop_path}`,
              }}
            />
            <Text style={styles.title}>{movie.title}</Text>
            <View style={styles.icon}>
                <Icon name='heart' size={20} ></Icon>
                <Icon name='star' size={20} color='orange' style={styles.liked}>  </Icon>
                <Text>{movie.vote_average}</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: '#e4e5ee',
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
    borderColor: '#e4e5ee',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
    borderRadius: 5,
    backgroundColor: '#e4e5ee',
  },
  img1: {
    height: 150,
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
    height: 40,
  },
  description: {
    paddingTop: 10,
    fontSize: 15,
    marginBottom: 20,
  },
  icon: {
    flexDirection: "row",
    marginTop: 10,
  },
  liked: {
    marginLeft: 'auto',
  },
});
