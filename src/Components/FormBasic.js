import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const FormBasic = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [mail, setMail] = useState('');

  const [updatedData, setUpdatedData] = useState([]);

  const UserData = () => {
    setUpdatedData([...updatedData, {name: name, password: pass, Mail: mail}]);
    setName('');
    setPass('');
    setMail('');
  };
  const DeleteData = () => {
    const NewData = updatedData.filter(x =>
      console.log(updatedData.indexOf(x)),
    );
    console.log('->>>>>>', NewData);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.text}>Online Registration</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Password"
        secureTextEntry={true}
        onChangeText={text => setPass(text)}
        value={pass}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter your Email"
        onChangeText={text => setMail(text)}
        value={mail}
      />

      <Button title="Sava Data " onPress={UserData} />

      <FlatList
        style={{flex: 1}}
        data={updatedData}
        renderItem={({item, index}) => {
          console.log(index);
          return (
            <View style={styles.cards}>
              <Text style={styles.text}> Name:-{item.name}</Text>
              <Text style={styles.text}> Password:-{item.password}</Text>
              <Text style={styles.text}>Mail:-{item.Mail}</Text>
              <TouchableOpacity style={styles.deleteBtn} onPress={DeleteData}>
                <Text style={styles.btnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      {/* <View>
        {display ? (
          <View style={styles.cards}>
            <Text style={styles.text}>Your Name is:{name}</Text>
            <Text style={styles.text}>Your Password is:{pass}</Text>
            <Text style={styles.text}>Your Email is:{mail}</Text>
          </View>
        ) : null}
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
  },

  textInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
  },
  cards: {
    flex: 1,
    backgroundColor: 'lightblue',
    width: '96%',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 9,
  },
  deleteBtn: {
    backgroundColor: 'pink',
    borderRadius: 3,
    width: '30%',
    margin: 8,
  },
  btnText: {
    padding: 7,
    textAlign: 'center',
    fontSize: 21,
    color: 'black',
  },
});

export default FormBasic;
