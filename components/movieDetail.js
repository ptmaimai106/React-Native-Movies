import React, {useState} from 'react';
import {Animated, Text, View, StyleSheet, Easing} from 'react-native';

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      easing: Easing.back(),
      duration: 2000,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default props => {
  const detail = props.detail;
  return (
    <View style={styles.container}>
      <FadeInView style={styles.fadeInView}>
        <Text style={styles.title}>{detail.title}</Text>
        <Text style={styles.date}>{detail.release_date}</Text>
        <Text style={styles.vote}>{detail.vote_average}</Text>
        <Text style={styles.descr} numberOfLines={4}>
          {detail.overview}
        </Text>
      </FadeInView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '30%',
    left: '10%',
  },
  fadeInView: {
    width: 300,
    height: 200,
    backgroundColor: '#e4e5ee',
    borderColor: '#e4e5ee',
    borderRadius: 3,
    borderWidth: 1,
    shadowColor: '#e4e5ee',
    shadowRadius: 5,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});
