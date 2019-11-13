import React from 'react';
import {StyleSheet, View, Alert, Image, Button} from 'react-native';
import Detail from './movieDetail';
import Icon from 'react-native-vector-icons/FontAwesome';

const icon = (<Icon name='heart' size={40} ></Icon>)

export default class Movie extends React.Component {
  static navigationOptions = {
    title: 'MOVIE',
  };
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  handleAddToFavorite = () => {
    Alert.alert('Add to favorite successfully !');
    this.props.addToFavorite(this.props.navigation.getParam('detail'));
  };

  render() {
    const {navigation} = this.props;
    const detail = navigation.getParam('detail');
    return (
      <View style={styles.container}>
        {icon}
        <Button
          title="Add to favorite list"
          color="#f194ff"
          onPress={this.handleAddToFavorite}
        />
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
    padding: 10,
  },
  poster: {
    flex: 1,
    width: 330,
    resizeMode: 'cover',
    shadowColor: '#ffff',
    shadowRadius: 10,
    marginTop: 10,
  },
});
