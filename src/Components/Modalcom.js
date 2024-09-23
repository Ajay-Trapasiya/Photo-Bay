import {View, Text, StyleSheet, Button, Modal} from 'react-native';
import React, {useState} from 'react';

const Modalcom = () => {
  const [visisble, setVisible] = useState(false);
  return (
    <View style={styles.main}>
      <View style={styles.modalContainer}>
        <Modal transparent={true} visible={visisble}>
          <Text style={styles.textStyle}>Hello Modal</Text>
          <Button title="press here" onPress={() => setVisible(false)} />
        </Modal>
      </View>

      <View style={styles.container}>
        <Button title="Press Here" onPress={() => setVisible(true)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'grey',
  },
  container: {
    // flex: 1,
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    flex: 1,
    color: 'blue',
  },
  textStyle: {
    fontSize: 29,
    color: 'blue',
  },
});
export default Modalcom;
