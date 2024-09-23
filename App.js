// import React, {useState} from 'react';
// import {View, Switch, StyleSheet} from 'react-native';

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   return (
//     <View style={styles.container}>
//       {/* <Switch
//         trackColor={{false: '#767577', true: '#81b0ff'}}
//         thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       /> */}

//       <Switch
//         value={isEnabled}
//         onValueChange={() => setIsEnabled(previousState => !previousState)}
//         trackColor={{false: 'red', true: 'pink'}}
//         thumbColor="green"
//         // disabled={true}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;
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

const App = () => {
  return (
    <View style={styles.container}>
      <PhotoBay />
      {/* <Text>App</Text> */}
      {/* <Flatlist /> */}
      {/* <TouchOp /> */}
      {/* <TouchwithOutAcc /> */}
      {/* <ImgBackground /> */}
      {/* <KeyboardAvoidingComponent /> */}
      {/* <BtnStc /> */}
      {/* <SectionListComp /> */}
      {/* <StatusBarcom /> */}
      {/* <Modalcom /> */}
      {/* <Textcom /> */}
      {/* <Practice /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
