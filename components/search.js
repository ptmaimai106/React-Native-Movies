import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  input: {
    height: 40,
  },
});
