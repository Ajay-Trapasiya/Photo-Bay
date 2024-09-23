import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
const data = [
  {Title: 'item111'},
  {Title: 'item2'},
  {Title: 'item3'},
  {Title: 'item4'},
  {Title: 'item4'},
  {Title: 'item4'},
  {Title: 'item4'},
  {Title: 'item9'},
  {Title: 'item9'},
  {Title: 'item9'},
  {Title: 'item9'},
  {Title: 'item9'},
  {Title: 'item91'},
  {Title: 'item19'},
];

const Flatlist = () => {
  // const render = ({item, index}) => (
  //   <View style={style.Id}>
  //     <Text style={style.text}>
  //       {index}:{item.Title}
  //     </Text>
  //   </View>
  // );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={style.Text}>{item.Title}</Text>}
        keyExtractor={item => item.Id}
        // contentContainerStyle={style.flat}
        // horizontal={true}
        inverted={true}
      />
    </View>
  );
};

const style = StyleSheet.create({
  flat: {margin: 22, borderWidth: 3},

  Text: {
    fontSize: 34,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'black',
    // alignItems: 'center',
    textAlign: 'center',
    margin: 10,
  },
});

export default Flatlist;
