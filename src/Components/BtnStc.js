import {View, Text, Button} from 'react-native';
import React from 'react';

const BtnStc = () => {
  return (
    <View>
      <Text>BtnStc</Text>
      <Button title="Press here" disabled={false} nextFocusDown={4} />
    </View>
  );
};

export default BtnStc;
