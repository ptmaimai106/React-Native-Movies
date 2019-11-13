import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Search from './search';
import MovieItem from './movieItem';
import menuIcon1 from '../assert/button4.png';
import menuIcon0 from '../assert/button0.png';

const key = 'a2239b4f1d050bfc4e3a37e93b3d9540';
export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isList: true,
      searchText: '',
      loading: false, // user list loading
      isRefreshing: false, //for pull to refresh
      data: [], //user list
      error: '',
      page: 1,
    };
  }

  componentDidMount = () => {
    const {type} = this.props;
    const {page} = this.state;
    let kindof = '';
    if (type === 1) {
      kindof = 'now_playing';
    } else if (type === 2) {
      kindof = 'top_rated';
    }
    let url = `https://api.themoviedb.org/3/movie/${kindof}?api_key=${key}&language=en-US&page=${page}`;
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.results,
            data: responseJson.results,
          },
          () => {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  searchFilterFunction = text => {
    const {dataSource, data} = this.state;

    if (text.trim()) {
      const newData = dataSource.filter(item => {
        const itemData = `${item.title.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({dataSource: newData});
    } else {
      this.setState({dataSource: data});
    }
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
