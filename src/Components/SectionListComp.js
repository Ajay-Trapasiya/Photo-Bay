import {View, Text, StyleSheet, SectionList} from 'react-native';
import React from 'react';
const arr = [
  {
    name: 'Ajay',
    Id: 1,
    data: ['java', 'python'],
  },
  {
    name: 'jay',
    Id: 2,
    data: ['c', 'c++'],
  },
  {
    name: 'Rohan',
    Id: 3,
    data: ['React', 'RN'],
  },
];

const SectionListComp = () => {
  return (
    <View style={style.main}>
      <SectionList
        sections={arr}
        renderItem={({item}) => <Text style={style.textSize}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={style.renderText}>{name}</Text>
        )}
        inverted={false}
      />
    </View>
  );
};
const style = StyleSheet.create({
  main: {
    flex: 0.7,
    alignItems: 'center',
    // backgroundColor: 'grey',
  },
  textSize: {
    fontSize: 23,
    color: 'green',
    borderWidth: 2,
    margin: 7,
    textAlign: 'center',
  },
  renderText: {
    fontSize: 34,
    color: 'grey',
    textAlign: 'center',
  },
});
export default SectionListComp;
