import {View, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';

const TextComponet = () => {
  const handlePress = () => {
    Alert.alert('Text Pressed!', 'You have pressed the text.');
  };
  return (
    <View style={styles.mainContainer}>
      <Text
        style={styles.textStyle}
        // maxFontSizeMultiplier={5}
        // allowFontScaling={false}
        // aria-busy={true}
        // numberOfLines={1}
        // ellipsizeMode="clip"
        // maxFontSizeMultiplier={1.5}
        // onPress={handlePress}
        // selectable={true}
        // selectionColor="red"
      >
        This is the Practice component of RN
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    margin: 'auto',
  },
  textStyle: {
    fontSize: 29,
    color: 'black',
  },
});

export default TextComponet;
