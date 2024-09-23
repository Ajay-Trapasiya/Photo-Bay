import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Child from './Child';

const Props = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Props</Text>
      <Button title="Press Here" onPress={() => {
        setCount(count + 1)
      }
      }
         />
         
      <Child data={count} />
    </View>
  );
};

export default Props;
