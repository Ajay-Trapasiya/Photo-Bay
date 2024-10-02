import {View, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const TextInputComponent = () => {
  const [textVal, setTextVal] = useState('');
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter you name is"
        onChangeText={txt => {
          setTextVal(txt);
        }}
        tValue={textVal}

        // keyboardType="numeric"
        // allowFontScaling={false}
        // autoCapitalize="words"
        // autoComplete="off"
        // autoCorrect={true}
        // autoFocus={false}
        // caretHidden={true} // Hide the caret
        // clearButtonMode="while-editing"
        // contextMenuHidden={true} // Disable the context menu copy-paste
        // clearTextOnFocus={false}
        // cursorColor="red"
        // editable={false}
        // inputMode="decimal" // Optimizes keyboard for decimal input
        // keyboardAppearance="light"
        // maxLength={1}
        // multiline={4}
        // numberOfLines={4} // Optional: specify initial number of lines
        // onChangeText={}
        // placeholderTextColor="red"
        // readOnly={true}
        // secureTextEntry={true}
        // selection={{start: 5, end: 8}}
        // textAlign="right"
        // underlineColorAndroid="red"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    margin: 'auto',
  },
  textInput: {
    borderWidth: 1,
    width: '100%',
    padding: 20,
  },
});

export default TextInputComponent;
