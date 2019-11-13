import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Detail extends React.Component {
  render() {
    const detail = this.props.detail;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{detail.title}</Text>
        <View style={styles.calendar}>
          <Icon name="calendar" size={20}>
            {'   '}
          </Icon>
          <Text style={styles.date}>{detail.release_date}</Text>
        </View>
        <View style={styles.star}>
          <Icon name="star" size={20} color="orange" style={styles.liked}>
            {'  '}
          </Icon>
          <Text style={styles.vote}>{detail.vote_average}</Text>
        </View>
        <Text style={styles.descr} numberOfLines={3}>
          {detail.overview}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    width: 300,
    height: 250,
    backgroundColor: '#e4e5ee',
    borderColor: '#e4e5ee',
    borderRadius: 3,
    borderWidth: 1,
    shadowColor: '#e4e5ee',
    shadowRadius: 5,
    padding: 10,
    opacity: 0.7,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  calendar: {
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
});
