import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import React from 'react';

const ButtonStyle = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
        title="Press here"
        onPress={() => Alert.alert('Verified')}
        color="blue"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'blue',

    justifyContent: 'center',
  },
});

export default ButtonStyle;
