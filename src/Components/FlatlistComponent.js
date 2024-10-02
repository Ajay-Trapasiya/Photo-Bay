import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
const DATA = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
  {id: '6', title: 'Item 6'},
  {id: '7', title: 'Item 7'},
  {id: '8', title: 'Item 8'},
  {id: '9', title: 'Item 9'},
  {id: '10', title: 'Item 10'},
  {id: '11', title: 'Item 11'},
  {id: '12', title: 'Item 12'},
  {id: '13', title: 'Item 13'},
  {id: '14', title: 'Item 14'},
  {id: '15', title: 'Item 15'},
];
// const ItemSeparator = () => {
//   return <View style={styles.separator} />;
// };

const FlatlistComponent = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
        // keyExtractor={item => item.id}
        //ItemSeparatorComponent={ItemSeparator}
        // ListFooterComponent={ItemSeparator} // Custom separator component
        // ListHeaderComponent={ItemSeparator} // Custom separator component
        // numColumns={2}
        // initialNumToRender={10} // Only the first 10 items will be rendered initially
        // initialScrollIndex={5}
        refreshing={true}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: 'red',
  },
});

export default FlatlistComponent;
