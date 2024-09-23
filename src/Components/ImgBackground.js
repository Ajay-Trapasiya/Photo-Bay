import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

const ImgBackground = () => {
  return (
    <View>
      <Text>ImgBackground dedddddd</Text>
      <ImageBackground
        style={styles.img}
        source={require('./Assests/logo.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 39,
    width: '100%',
    backgroundColor: 'green',
  },
});
export default ImgBackground;
