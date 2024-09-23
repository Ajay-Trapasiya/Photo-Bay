import {View, Text} from 'react-native';
import React from 'react';

const textCom = () => {
  return (
    <View>
      <Text selectable={true} selectionColor="blue" accessible={false}>
        Hello this this is the text
      </Text>
    </View>
  );
};

export default textCom;
