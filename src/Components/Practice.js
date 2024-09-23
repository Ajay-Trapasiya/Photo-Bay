import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Practice = () => {
  return (
    <View style={style.main}>
      <TextInput placeholder="Enter your name" style={style.textInput} />
    </View>
  );
};
const style = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'grey',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
    borderRadius: 8,
    margin: 10,
  },
});
export default Practice;
