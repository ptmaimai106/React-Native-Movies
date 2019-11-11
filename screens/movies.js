import React from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import Search from '../components/search';
import MovieItem from '../components/movieItem';
import img from '../assert/img.jpg';

export default class Movies extends React.Component {
  static navigationOptions = {
    title: 'MOVIES',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount = () => {
    return fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=a2239b4f1d050bfc4e3a37e93b3d9540&language=en-US&page=1',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.results,
          },
          () => {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.movie}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Search />
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <MovieItem
              title={item.title}
              description={item.overview}
              src={img}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
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
