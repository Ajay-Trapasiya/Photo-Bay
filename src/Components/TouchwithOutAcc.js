import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const TouchwithOutAcc = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.btn}>
      <Text>{count}</Text>
      <TouchableWithoutFeedback
        accessible={false}
        onPress={() => setCount(count - 1)}>
        <Text>Press Here</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    // backgroundColor: 'grey',
    alignItems: 'center',
    padding: 10,
  },
});

export default TouchwithOutAcc;
