import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';

const ScrollComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        // horizontal
        //   alwaysBounceHorizontal={false}
        // contentOffset={{x: 100, y: 10000}} // Start scrolling from 100 pixels down
        // indicatorStyle="black"
        // onMomentumScrollBegin={() => {Alert.alert('heloo');}}
        // onMomentumScrollBegin
        // onScroll={() => { Alert.alert('heloo');}}
        // onScrollBeginDrag={() => {   'hello';}}   // Triggered when scrolling starts
        // persistentScrollbar={false}
        // scrollEnabled={true}
        // showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
});

export default ScrollComponent;
