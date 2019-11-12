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
            <Text style={styles.description} numberOfLines={4}>
              {description}
            </Text>
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
    marginHorizontal: 8,
    shadowColor: '#ffff',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: 'gray',
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
    fontSize: 20,
  },
  description: {
    paddingTop: 10,
    fontSize: 15,
  },
});
