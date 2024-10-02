import {View, Text, StyleSheet, Button, Modal} from 'react-native';
import React, {useState} from 'react';

const Modalcom = () => {
  const [visisble, setVisible] = useState(false);
  return (
    <View style={styles.main}>
      <View style={styles.modalContainer}>
        <Modal transparent={true} visible={visisble} animationType="slide">
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>Hello Modal</Text>
            <Button title="press here" onPress={() => setVisible(false)} />
          </View>
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
  },
  textStyle: {
    fontSize: 29,
    color: 'orange',
    textAlign: 'center',
  },
  modelStyle: {
    borderWidth: 3,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    borderWidth: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
export default Modalcom;
