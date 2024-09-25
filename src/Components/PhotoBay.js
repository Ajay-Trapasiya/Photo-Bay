import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
const arr = [
  {name: 'Ajay', uri: require('./Assests/Dics.jpg')},
  {name: 'Rohan', uri: require('./Assests/homes.jpg')},
  {name: 'Jay', uri: require('./Assests/homes.jpg')},
  {name: 'Mahesh', uri: require('./Assests/homes.jpg')},
  {name: 'Vraj', uri: require('./Assests/Dics.jpg')},
  {name: 'Rohit', uri: require('./Assests/Dics.jpg')},
  {name: 'Rahul', uri: require('./Assests/homes.jpg')},
  {name: 'Raj', uri: require('./Assests/Dics.jpg')},
  {name: 'aniket', uri: require('./Assests/Dics.jpg')},
  {name: 'Jayesh', uri: require('./Assests/homes.jpg')},
  {name: 'Raj', uri: require('./Assests/Dics.jpg')},
  {name: 'Harsh', uri: require('./Assests/homes.jpg')},
  {name: 'Nilesh', uri: require('./Assests/Dics.jpg')},
  {name: 'Rohit', uri: require('./Assests/homes.jpg')},
];

const PhotoBay = () => {
  return (
    <SafeAreaView style={styles.ui}>
      <FlatList
        data={arr}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.renderView}>
            <View style={styles.circle}>
              <Image source={item.uri} style={styles.storyImage} />
            </View>
            <Text style={styles.storyText}>{item.name}</Text>
          </View>
        )}
      />
      <FlatList
        data={arr}
        renderItem={({item}) => (
          <View style={styles.photoCard}>
            <View style={styles.box}>
              <View style={styles.pictureHeader}>
                <Text style={styles.headerText}>{item.name}</Text>
                <Image
                  source={require('./Assests/dots.png')}
                  style={styles.dot}
                  resizeMode="contain"
                />
              </View>
              <Image source={item.uri} style={styles.mainPicture} />
              <View style={styles.reaction}>
                <View style={styles.r1}>
                  <Image
                    source={require('./Assests/share.png')}
                    style={styles.reactionIcons}
                  />
                  <Image
                    source={require('./Assests/send.png')}
                    style={styles.reactionIcons}
                  />
                  <Image
                    source={require('./Assests/speech-bubble.png')}
                    style={styles.reactionIcons}
                  />
                </View>
                <View style={styles.r2}>
                  <Image
                    source={require('./Assests/bookmark.png')}
                    style={styles.reactionIcons}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ui: {
    flex: 1,
  },
  storyText: {
    padding: 5,
    textAlign: 'center',
    color: 'black',
  },
  circle: {
    borderWidth: 0.9,
    borderColor: 'black',
    height: 65,
    width: 65,
    margin: 4,
    borderRadius: 50,
  },
  renderView: {
    flex: 1,
    paddingTop: 5,
    justifyContent: 'center',
  },
  storyImage: {
    height: 59,
    width: 59,
    margin: 'auto',
    borderRadius: 50,
  },
  photoCard: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  box: {
    backgroundColor: 'white',
  },
  mainPicture: {
    height: 176,
    width: '89%',
    margin: 'auto',
    borderRadius: 6,
  },
  headerText: {
    fontSize: 21,
    color: 'black',
    marginLeft: 27,
  },
  reaction: {
    flexDirection: 'row',
    height: 34,
  },
  reactionIcons: {
    height: 18,
    width: '7%',
    marginLeft: 9,
  },
  r1: {
    width: '56%',
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 9,
  },
  r2: {
    width: '33%',
    alignItems: 'flex-end',

    marginTop: 8,
    marginLeft: 9,
  },
  dot: {
    height: 20,
    width: '12%',
  },
  pictureHeader: {
    flexDirection: 'row',
    height: 63,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default PhotoBay;
