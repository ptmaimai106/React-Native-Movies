import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Search from './search';
import MovieItem from '../containers/movieItem';
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
      isRefreshing: false, //for pull to refresh
      data: [],
      error: '',
      kindof: 'now_playing',
    };
  }

  componentDidMount = () => {
    const {type} = this.props;
    let {kindof} = this.state;
    if (type === 1) {
      this.fetchMovie(kindof);
    } else if (type === 2) {
      kindof = 'top_rated';
      this.fetchMovie(kindof);
    } else if (type === 0) {
      const {favoriteList} = this.props;
      console.log(Object.keys(favoriteList).length);
      this.setState({
        dataSource: favoriteList,
        data: favoriteList,
        isLoading: false,
        isRefreshing: false,
      });
    }

    this.setState({kindof});
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.type === 0) {
      return {
        dataSource: nextProps.favoriteList,
        data: nextProps.favoriteList,
        isLoading: false,
        isRefreshing: false,
      };
    }
  }

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

    // if (this.props.type === 1 || this.props.type === 2) {
    //   let url = `https://api.themoviedb.org/3/search/company?api_key=${key}&query=${text}&page=${
    //     this.page
    //   }`;
    //   this.setState({isLoading: true});
    //   return fetch(url)
    //     .then(response => response.json())
    //     .then(responseJson => {
    //       this.setState(
    //         {
    //           isLoading: false,
    //           isRefreshing: false,
    //           dataSource: responseJson.results,
    //         },
    //         () => {},
    //       );
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }
  };

  handleClickMenu = () => {
    const {isList} = this.state;
    this.setState({
      isList: !isList,
    });
  };

  renderFooter = () => {
    if (!this.state.isLoading) {
      return null;
    }
    return (
      <View style={styles.renderFooter}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  handleRefresh = () => {
    if (!this.state.isLoading) {
      this.page = this.page + 1;
      this.fetchMovie(this.state.kindof);
    }
  };

  handleLoadMore = () => {
    if (!this.state.isLoading) {
      this.page = this.page + 1;
      let {data, kindof} = this.state;
      let url = `https://api.themoviedb.org/3/movie/${kindof}?api_key=${key}&language=en-US&page=${
        this.page
      }`;
      this.setState({isLoading: true});
      return fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          data = data.concat(responseJson.results);
          this.setState(
            {
              isLoading: false,
              isRefreshing: false,
              dataSource: data,
              data,
            },
            () => {},
          );
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  fetchMovie = kindof => {
    if (this.props.type === 1 || this.props.type === 2) {
      let url = `https://api.themoviedb.org/3/movie/${kindof}?api_key=${key}&language=en-US&page=${
        this.page
      }`;
      this.setState({isLoading: true});
      return fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              isRefreshing: false,
              dataSource: responseJson.results,
              data: responseJson.results,
            },
            () => {},
          );
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  render() {
    const {isList, dataSource} = this.state;
    if (this.state.isLoading && this.page === 1) {
      return (
        <View style={styles.movie}>
          <ActivityIndicator />
        </View>
      );
    }
    const movies = isList ? (
      <FlatList
        style={styles.flatList}
        data={dataSource}
        extraData={this.state}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.handleRefresh}
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
        onEndReached={this.handleLoadMore}
      />
    ) : (
      <FlatList
        data={dataSource}
        numColumns={2}
        key={this.state.isList ? 'h' : 'v'}
        extraData={this.state}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.handleRefresh}
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
    );

    const numOfMovies = Object.keys(dataSource).length;
    const favorites = numOfMovies > 0 ? {movies} : <Text>List is empty</Text>;

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
        {/* {favorites} */}
        {movies}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    marginBottom: 50,
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
  renderFooter: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
});
