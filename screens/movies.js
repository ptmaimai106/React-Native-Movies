import React from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import Search from '../components/search';
import MovieItem from '../components/movieItem';
import img from '../assert/img.jpg';

const data = [
  {
    title: 'Title of Movie 1',
    description: 'Description of movie',
    src: img,
  },
  {
    title: 'Title of Movie 2',
    description: 'Description of movie',
    src: img,
  },
  {
    title: 'Title of Movie 3',
    description: 'Description of movie',
    src: img,
  },
  {
    title: 'Title of Movie 3',
    description: 'Description of movie',
    src: img,
  },
  {
    title: 'Title of Movie 3',
    description: 'Description of movie',
    src: img,
  },
];

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
      'https://api.themoviedb.org/3/list/%7Blist_id%7D?language=en-US&api_key=%3C%3Capi_key%3E%3E',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies,
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
          data={data}
          renderItem={({item, index}) => (
            <MovieItem
              title={item.title}
              description={item.description}
              src={item.src}
              key={index}
              navigation={this.props.navigation}
            />
          )}
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
