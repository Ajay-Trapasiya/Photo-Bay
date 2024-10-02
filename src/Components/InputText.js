import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const InputText = () => {
  const [name, setName] = useState('Ajay');
 
  return (
    <View>
      <Text>InputText ddd</Text>
      <Text>UserName:{name}</Text>
      <TextInput
 
        // style={{borderWidth: 2, borderColor: 'red', fontSize: 22, margin: 9}}
        // placeholder="Enter Your Name"
        // onChangeText={(value)=> setName(value)} value={name}
        style={styles.inputStyle}
        placeholder='Enter you name'
        onChangeText={(value)=>s0etName(value)}
        // keyboardType='numeric'
      

      />
      
      {/* <Button title='clear' onPress={()=>setName(' ')}  /> */}
    </View>
  );
};
const styles =StyleSheet.create({
  inputStyle:{
    borderWidth:2,
    borderColor:'red'
  }
})

export default InputText;
