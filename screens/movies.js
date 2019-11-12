import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Search from '../components/search';
import MovieItem from '../components/movieItem';
import menuIcon1 from '../assert/button4.png';
import menuIcon0 from '../assert/button0.png';

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
    this.state = {
      isLoading: true,
      isList: true,
      searchText: '',
    };
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

  searchFilterFunction = text => {
    console.log('here');
    const {dataSource} = this.state;
    const newData = dataSource.filter(item => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({data: newData});
  };

  handleClickMenu = () => {
    const {isList} = this.state;
    this.setState({
      isList: !isList,
    });
  };

  render() {
    const {isList} = this.state;
    if (this.state.isLoading) {
      return (
        <View style={styles.movie}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Search
            style={styles.searchBar}
            onTextChange={this.searchFilterFunction}
          />
          <TouchableOpacity onPress={this.handleClickMenu}>
            <Image
              source={isList ? menuIcon0 : menuIcon1}
              style={styles.menu}
            />
          </TouchableOpacity>
        </View>
        {isList ? (
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => (
              <MovieItem
                movie={item}
                navigation={this.props.navigation}
                list={true}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <FlatList
            data={this.state.dataSource}
            numColumns={2}
            key={this.state.isList ? 'h' : 'v'}
            renderItem={({item}) => (
              <MovieItem
                movie={item}
                navigation={this.props.navigation}
                list={false}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movies: {
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  header: {
    flexDirection: 'row',
  },
  menu: {
    height: 40,
    width: 40,
    marginLeft: 'auto',
    marginTop: 12,
  },
});
