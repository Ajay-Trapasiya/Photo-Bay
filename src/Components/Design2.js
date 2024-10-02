import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Design2 = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.sizing}>
          <TouchableOpacity style={{flex: 1}}>
            <View style={styles.square} />
          </TouchableOpacity>
          <View style={styles.square} />
        </View>

        <View style={styles.sizing}>
          <View style={styles.square} />
          <View style={styles.square} />
        </View>

        <View style={styles.sizing}>
          <View style={styles.square} />
          <View style={styles.square} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    // flex: 0.1,
    backgroundColor: 'orange',
    padding: 10,
    // height: 50,
  },
  text: {
    fontSize: 29,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#7CA1B4',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
    padding: 15,
  },
  square: {
    backgroundColor: '#7cb48f',
    // width: '99%',
    // height: 100,
    margin: 15,
    flex: 1,
  },
  sizing: {
    // borderWidth: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Design2;
