import React from 'react';

import {TouchableHighlight, Text, StyleSheet} from 'react-native';

const MyButton = () => (
  <TouchableHighlight
    style={styles.button}
    onPress={() => console.log('Pressed!')}
    underlayColor="red" // Color when pressed
    // activeOpacity={0.5}
  >
    <Text style={styles.text}>TouchableHighlight Button</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  },
});

export default MyButton;
