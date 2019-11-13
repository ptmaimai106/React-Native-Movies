import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Search from './search';
import MovieItem from './movieItem';
import menuIcon1 from '../assert/button4.png';
import menuIcon0 from '../assert/button0.png';

const key = 'a2239b4f1d050bfc4e3a37e93b3d9540';
export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.state = {
      isLoading: true,
      isList: true,
      searchText: '',
      loading: false, // user list loading
      isRefreshing: false, //for pull to refresh
      data: [], //user list
      error: '',
      kindof: 'now_playing',
    };
  }

  componentDidMount = () => {
    const {type} = this.props;
    if (type === 1) {
      this.setState({
        kindof: 'now_playing',
      });
    } else if (type === 2) {
      this.setState({
        kindof: 'top_rated',
      });
    }
    this.fetchMovie();
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

  renderFooter = () => {
    if (!this.state.loading) {
      return null;
    }
    return <ActivityIndicator />;
  };

  handleLoadMore = () => {
    if (!this.state.loading) {
      this.page = this.page + 1;
      this.fetchMovie();
    }
  };

  fetchMovie = () => {
    const {kindof} = this.state;
    let url = `https://api.themoviedb.org/3/movie/${kindof}?api_key=${key}&language=en-US&page=${
      this.page
    }`;
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

  render() {
    const {isList} = this.state;
    if (this.state.isLoading && this.page === 1) {
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
            extraData={this.state}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
              />
            }
            renderItem={({item}) => (
              <MovieItem
                movie={item}
                navigation={this.props.navigation}
                list={true}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this.renderFooter}
            onEndReachedThreshold={0.4}
            onEndReached={this.handleLoadMore}
          />
        ) : (
          <FlatList
            data={this.state.dataSource}
            numColumns={2}
            key={this.state.isList ? 'h' : 'v'}
            extraData={this.state}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
              />
            }
            renderItem={({item}) => (
              <MovieItem
                movie={item}
                navigation={this.props.navigation}
                list={false}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this.renderFooter}
            onEndReachedThreshold={0.4}
            onEndReached={this.handleLoadMore}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 20,
  },
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
