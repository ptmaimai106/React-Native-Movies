import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleChangeText = text => {
    this.setState({
      text,
    });
    this.props.onTextChange(text);
  };

  render() {
    const {text} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search .."
          onChangeText={input => this.handleChangeText(input)}
          value={text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginRight: 20,
    marginLeft: 8,
  },
  input: {
    height: 50,
    width: 270,
  },
});
