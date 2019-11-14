import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MovieItem extends Component {
  handleAddToFavorite = () => {
    Alert.alert('Add to favorite successfully !');
    //console.log(this.props.movie);
    this.props.addToFavorite(this.props.navigation.getParam('movie'));
    // AsyncStorage.setItem('favorites', this.props.movie);
    // let data = AsyncStorage.getItem('favorites');
    // console.log(data);
  };

  render() {
    const {movie, list} = this.props;
    const imgPathBase = 'https://image.tmdb.org/t/p/w500/';
    return (
      <View>
        {list ? (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Movie', {
                  detail: movie,
                })
              }>
              <Image
                style={styles.img}
                source={{
                  uri: `${imgPathBase}${movie.backdrop_path}`,
                }}
              />
            </TouchableOpacity>
            <View style={styles.body}>
              <Text
                style={styles.title}
                onPress={() =>
                  this.props.navigation.navigate('Movie', {
                    detail: movie,
                  })
                }>
                {movie.title}
              </Text>
              <Text style={styles.description} numberOfLines={2}>
                {movie.overview}
              </Text>
              <View style={styles.icon}>
                <Icon
                  name="heart"
                  size={20}
                  onPress={this.handleAddToFavorite}
                />
                <Icon name="star" size={20} color="orange" style={styles.liked}>
                  {' '}
                </Icon>
                <Text>{movie.vote_average}</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.container1}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Movie', {
                  detail: movie,
                })
              }>
              <Image
                style={styles.img1}
                source={{
                  uri: `${imgPathBase}${movie.backdrop_path}`,
                }}
              />
            </TouchableOpacity>
            <Text
              style={styles.title}
              onPress={() =>
                this.props.navigation.navigate('Movie', {
                  detail: movie,
                })
              }>
              {movie.title}
            </Text>
            <View style={styles.icon}>
              <Icon name="heart" size={20} onPress={this.handleAddToFavorite} />
              <Icon name="star" size={20} color="orange" style={styles.liked}>
                {' '}
              </Icon>
              <Text>{movie.vote_average}</Text>
            </View>
          </View>
        )}
      </View>
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
    paddingBottom: 10,
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
    flexDirection: 'row',
    marginTop: 10,
  },
  liked: {
    marginLeft: 'auto',
  },
});
