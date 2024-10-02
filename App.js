import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TouchOp from './src/Components/TouchOp';
import Flatlist from './src/Components/Flatlist';
import TouchwithOutAcc from './src/Components/TouchwithOutAcc';
import ImgBackground from './src/Components/ImgBackground';
import KeyboardAvoidingComponent from './src/Components/KeyboardAvoidingComponent';
import BtnStc from './src/Components/BtnStc';
import SectionListComp from './src/Components/SectionListComp';
import StatusBarcom from './src/Components/StatusBarcom';
import Modalcom from './src/Components/Modalcom';
import Textcom from './src/Components/Textcom';
import Practice from './src/Components/Practice';
import PhotoBay from './src/Components/PhotoBay';
import Design2 from './src/Components/Design2';
import FormBasic from './src/Components/FormBasic';
import TextComponet from './src/Components/TextComponet';
import TextInputComponent from './src/Components/TextInputComponent';
import FlatlistComponent from './src/Components/FlatlistComponent';
import ScrollComponent from './src/Components/ScrollComponent';
import MyButton from './MyButton';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <PhotoBay /> */}
      {/* <Text>App</Text> */}
      {/* <Flatlist /> */}
      {/* <TouchwithOutAcc /> */}
      {/* <ImgBackground /> */}
      {/* <KeyboardAvoidingComponent /> */}
      {/* <SectionListComp /> */}
      {/* <StatusBarcom /> */}
      {/* <Textcom /> */}
      {/* <Practice />    */}
      {/* <Design2 /> */}
      <FormBasic />
      {/* <<<<<<<<<<<<<<***********************************************>>>>>>>>>>>>>>>*/}
      {/* <<<<<<<<<<<<<<***********************************************>>>>>>>>>>>>>>>*/}
      {/* <TextComponet /> */}
      {/* <TextInputComponent /> */}
      {/* <FlatlistComponent /> */}
      {/* <ScrollComponent /> */}
      {/* <Modalcom /> */}
      {/* <TouchOp /> */}
      {/* <MyButton /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
