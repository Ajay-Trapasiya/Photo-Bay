import {View, Text} from 'react-native';
import React from 'react';

const Child = (props)=> {
  console.log(props);
  
  return (
    <View>
      <Text>Child</Text>
      <Text>{props.data}</Text>
    </View>
  );
};

export default Child;
