import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

const PhotoBay = () => {
  return (
    <SafeAreaView style={styles.ui}>
      <View style={styles.main}>
        <ScrollView style={styles.scroll}>
          <View style={styles.storyList}>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
          </View>
          {/* <View style={{backgroundColor: 'green', flex: 0.7}}></View> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ui: {
    flex: 1,
  },

  main: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  scroll: {
    backgroundColor: 'pink',
    height: '20%',
    // flex: 0.3,
  },

  storyList: {
    flex: 0.1,
    flexDirection: 'row',
    // backgroundColor: 'green',
    borderBottomWidth: 1,
  },
  circle: {
    borderWidth: 2,
    height: 100,
    // flex: 1,
    // borderColor: 'black',
    borderRadius: 50,
    // width: 85,
  },
});

export default PhotoBay;
