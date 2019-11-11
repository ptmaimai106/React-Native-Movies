import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

export default class MovieItem extends Component {
  render() {
    const {title, description, src} = this.props;
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
        <View style={styles.container}>
          <Image style={styles.img} source={src} />
          <View style={styles.body}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'gray',
  },
  img: {
    height: 130,
    width: 100,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    paddingTop: 10,
  },
});
