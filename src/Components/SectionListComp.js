// import {View, Text, StyleSheet, SectionList} from 'react-native';
// import React from 'react';
// const arr = [
//   {
//     name: 'Ajay',
//     Id: 1,
//     data: ['java', 'python'],
//   },
//   {
//     name: 'jay',
//     Id: 2,
//     data: ['c', 'c++'],
//   },
//   {
//     name: 'Rohan',
//     Id: 3,
//     data: ['React', 'RN'],
//   },
// ];

// const SectionListComp = () => {
//   return (
//     <View style={style.main}>
//       <SectionList
//         sections={arr}
//         renderItem={({item}) => <Text style={style.textSize}>{item}</Text>}
//         renderSectionHeader={({section: {name}}) => (
//           <Text style={style.renderText}>{name}</Text>
//         )}
//         inverted={false}
//       />
//     </View>
//   );
// };
// const style = StyleSheet.create({
//   main: {
//     flex: 0.7,
//     alignItems: 'center',
//     // backgroundColor: 'grey',
//   },
//   textSize: {
//     fontSize: 23,
//     color: 'green',
//     borderWidth: 2,
//     margin: 7,
//     textAlign: 'center',
//   },
//   renderText: {
//     fontSize: 34,
//     color: 'grey',
//     textAlign: 'center',
//   },
// });
// export default SectionListComp;

import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
const App = () => {
  const [inputItem, setInputItem] = useState('');
  const [items, setItems] = useState([]);
  const handleAddItem = () => {
    inputItem.trim() && setItems([...items, inputItem]);
    setInputItem('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter item"
        value={inputItem}
        onChangeText={setInputItem}
      />
      <Button title="Add Item" onPress={handleAddItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#F9C2FF',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
  },
});
export default App;
