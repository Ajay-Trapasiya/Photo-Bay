import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ImageComponent = () => {
  return (
    <View style={styles.maincontainer}>
      <Text>ImageComponent</Text>
      <View style={styles.container1}>
        <Image
        //   source={require('./Assests/tiny_logo.png')}
          style={styles.imagestyles}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
         resizeMode='contain '
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imagestyles: {
    height: 57,
    width: 52,
    

    // alignItems:'center',
    // justifyContent:'center'
  },
  maincontainer: {
    flex: 1,
    // backgroundColor: 'grey',
  },
  container1:{
    // backgroundColor:'green',
    flex:1,
    // justifyContent:'center'
    alignItems:'center',
    justifyContent:'center'
  }
});
export default ImageComponent;
