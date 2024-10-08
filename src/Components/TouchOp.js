import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useState} from 'react';

const TouchOp = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {}}
        activeOpacity={0.8}>
        <Image source={require('./Assests/logo.png')} />
        <Text>Opacity</Text>
      </TouchableOpacity>
      <Text>count is : {count}</Text>
      <View>
        <Button
          title="hello"
          color={'red'}
          style={styles.btn}
          onPress={() => {
            // setCount(count + 1);
            setCount;
            // console.log('fsdfs');
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  touch: {
    backgroundColor: 'green',
    width: 170,
    height: 67,
  },
  main: {
    flex: 1,
  },
  btn: {
    width: 50,
    height: 50,
  },
});

export default TouchOp;
