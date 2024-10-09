import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const FormBasic = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [mail, setMail] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const _id = Math.floor(Math.random() * 999);
  const [updatedData, setUpdatedData] = useState([]);
  // const [like,setLike] = useState(false)
  // console.log(updatedData);
  const onSaveDataPress = () => {
    setUpdatedData([
      ...updatedData,
      {name: name, password: pass, mail: mail, id: _id, isLike: false},
    ]);
    setName('');
    setPass('');
    setMail('');
  };

  const onEditDataPress = () => {
    console.log('......Id', uniqueId);

    const modifiedData = updatedData.map(element => {
      if (element.id === uniqueId) {
        return {...element, name: name, password: pass, mail: mail};
      }
      setIsEdit(false);
      setName('');
      setPass('');
      setMail('');
      return element;
    });
    setUpdatedData(modifiedData);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.text}>Online Registration</Text>
      <Text style={styles.cardCount}>Total Cards: {updatedData.length}</Text>
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

      <Button
        title={isEdit ? 'Edit Data' : 'Sava Data'}
        onPress={() => {
          isEdit ? onEditDataPress() : onSaveDataPress();
        }}
      />

      <FlatList
        style={{flex: 1}}
        data={updatedData}
        renderItem={({item}) => {
          return (
            <View style={styles.cards}>
              <Text style={styles.text}> Id:-{item.id}</Text>
              <Text style={styles.text}> Name:-{item.name}</Text>
              <Text style={styles.text}> Password:-{item.password}</Text>
              <Text style={styles.text}>Mail:-{item.mail}</Text>
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => {
                  const deletedData = updatedData.filter(
                    obj => obj.id !== item.id,
                  );
                  setUpdatedData(deletedData);
                }}>
                <Text style={styles.btnText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => {
                  setIsEdit(true);
                  setName(item.name);
                  setPass(item.password);
                  setMail(item.mail);
                  setUniqueId(item.id);
                }}>
                <Text style={styles.btnText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.likeButtonContainer}
                onPress={() => {
                  const updatedLike = updatedData.map(obj => {
                    if (obj.id === item.id) {
                      return {...obj, isLike: !obj.isLike};
                    }
                    return obj;
                  });
                  console.log(updatedLike);
                  setUpdatedData(updatedLike);

                  // console.warn('pressed id>>>>>', item.id);
                }}>
                <Image
                  tintColor={item.isLike ? 'red' : 'black'}
                  style={styles.likeBtn}
                  source={require('./Assests/Darkheart.png')}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
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
  cardCount: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
  },
  editBtn: {
    backgroundColor: 'pink',
    borderRadius: 3,
    width: '30%',
    margin: 8,
  },
  likeButtonContainer: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  likeBtn: {
    height: 39,
    width: 39,
  },
});

export default FormBasic;
