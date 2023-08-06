import React,{ useState } from 'react';
// import { ImageBackground, StyleSheet, Text, View ,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import { SliderBox } from 'react-native-image-slider-box';
import HOME from './HOME';
import Login from './Login';
import SignUp from './SignUp';
import ForgetPassword from './ForgetPassword';
import DashBoard from './DashBoard';
// import HOME from './screens/HOME/HOME';
// import Login from './screens/HOME/Login';
// import SignUp from './screens/HOME/SignUp';
// import ForgetPassword from './screens/HOME/ForgetPassword';
// import DashBoard from './screens/HOME/DashBoard';


const MainComponent=()=> {
  const Stack = createNativeStackNavigator();

  return (

    
        
        <Stack.Navigator  initialRouteName="HOME"   screenOptions={{ headerShown: false,}}> 
        <Stack.Screen name="HOME"  component={HOME}/> 
        <Stack.Screen name="Login"  component={Login}/> 
        <Stack.Screen name="SignUp"  component={SignUp}/> 
        <Stack.Screen name="ForgetPassword"  component={ForgetPassword}/> 
        <Stack.Screen name="DashBoard"  component={DashBoard}/> 
          </Stack.Navigator>      
        
  


  );
}

export default MainComponent;
