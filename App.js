import React, { useState,useEffect } from "react";
// import { ImageBackground, StyleSheet, Text, View ,Dimensions} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text,Modal } from "react-native";
// import { SliderBox } from 'react-native-image-slider-box';
import HOME from "./screens/HOME/HOME";
import Login from "./screens/HOME/Login";
import SignUp from "./screens/HOME/SignUp";
import ForgetPassword from "./screens/HOME/ForgetPassword";
import DashBoard from "./screens/HOME/DashBoard";
import MainComponent from "./screens/HOME/MainComponent";
import DashBoad from "./screens/HOME/DashBoard";
import { AuthContext } from './component/context';
import AsynStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isLoading, setIsLoading]=new useState(true)
  const [userToken, setUserToken]=new useState(null);
  const [info,setInfo]=new useState(null);
  const authContext=React.useMemo(()=> ({
    signUp : async() =>{
      setUserToken('Suffyan');
      try{
        await AsynStorage.setItem('userToken',userToken );
      } catch(e){
          console.log(e);
      }
      setIsLoading(false);
    },
    signIn : async(user_id) => {
      console.log(user_id, "name in signIN");
      setUserToken('Suffyan123');
      setIsLoading(false);
      try{
        await AsynStorage.setItem('userToken',user_id );
      } catch(e){
          console.log(e);
      }
    },
    signOut : async() => {
      console.log("signout");
      try{
        await AsynStorage.removeItem('userToken');
      } catch(e){
          console.log(e);
      }
      setUserToken(null);
      setIsLoading(false);
    },
   
  }),[]);
  // if(isLoading){
  //   return(
  //     <View>
  //           <Text>Hello Weloocome</Text>
  //     </View>
  //   )
  // }
  // const Stack = createNativeStackNavigator();

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer >
    {console.log(userToken," in main token")}
      {userToken!=null ?<DashBoad/> :<MainComponent /> }
      </NavigationContainer>
      </AuthContext.Provider>
    //       <NavigationContainer >

    //     <Stack.Navigator  initialRouteName="HOME"   screenOptions={{ headerShown: false,}}>
    //     <Stack.Screen name="HOME"  component={HOME}/>
    //     <Stack.Screen name="Login"  component={Login}/>
    //     <Stack.Screen name="SignUp"  component={SignUp}/>
    //     <Stack.Screen name="ForgetPassword"  component={ForgetPassword}/>
    //     <Stack.Screen name="DashBoard"  component={DashBoard}/>
    //       </Stack.Navigator>

    // </NavigationContainer>
  );
}
