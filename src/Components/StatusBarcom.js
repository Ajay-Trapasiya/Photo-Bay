import {View, Text, StatusBar, Button} from 'react-native';
import React, {useState} from 'react';

const StatusBarcom = () => {
  const [change, setChange] = useState('dark-content');
  return (
    <View>
      <StatusBar backgroundColor={'green'} barStyle={change} />
      <Button title="press here" onPress={() => setChange('default')} />
    </View>
  );
};

export default StatusBarcom;
