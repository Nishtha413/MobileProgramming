import React from 'react';
import {Text, View, TextInput,StyleSheet} from 'react-native';
import Classwork from './src/Classwork'
import Classwork1 from './src/Classwork1'
import Homepage from './src/Homepage'


const App=()=>{
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:50}}>
    {/* <Classwork></Classwork>
    <Classwork1></Classwork1> */}

    <Homepage></Homepage>
    </View>
  );
};


export default App;