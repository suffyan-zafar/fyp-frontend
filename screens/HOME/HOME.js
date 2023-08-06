import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {  TextInput, StyleSheet, Text, View,TouchableOpacity, Dimensions,SafeAreaView, Image, } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Ionicons from "react-native-vector-icons/Ionicons";
// import { SliderBox } from 'react-native-image-slider-box';
import Swiper from 'react-native-swiper';

const HOME=({navigation})=> {
  const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
console.log(screenWidth, "screen width");
console.log(screenHeight, "screen heisght");
  return (
    <SafeAreaView style={style.SafeView}>
    <View style={{ paddingHorizontal: 50 }}>
  
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../assets/home.png")} style={style.img} />
      </View>
      <Text style={style.LoginText}> Well Come To  </Text>
    <Text style={style.LoginText2}> Infant Monitoring System </Text>

  
  
      <TouchableOpacity
        onPress={() => { console.log("Login"); navigation.navigate("Login");}}
        style={{ backgroundColor: "#AD40AF", marginLeft:-40, padding:20, borderRadius:10, marginTop:100, width:"130%" }}
      >
        <Text style={{ fontWeight: 700, fontSize:17, color:"white" ,textAlign:"center" }}>Get Started</Text>
      </TouchableOpacity>
     
    </View>
  </SafeAreaView>  

    // <Swiper >
    //   <ImageBackground
    //       source={{uri:'https://images.pexels.com/photos/1751279/pexels-photo-1751279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} 
    //       style={style.image}>
    //     <Text style={{color:"white", fontSize:25, marginTop:150,marginHorizontal:10,textAlign:"left",width:320 ,height:"60%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
    //     <TouchableOpacity onPress={()=>{
    //         console.log("Love you yr");
    //         navigation.navigate("Login");
    //     }}>
    //     <Text style={style.button}>LOGIN</Text> 
           
    //     </TouchableOpacity>

    //     <TouchableOpacity onPress={()=>{
    //       console.log("Love you 2 yr");
    //       navigation.navigate("SignUp");
    //     }}>
       
    //     <Text style={style.button2}>SignUp</Text> 

    //     </TouchableOpacity>
    //   </ImageBackground>
    //   <ImageBackground
    //       source={{uri:'https://images.pexels.com/photos/1751279/pexels-photo-1751279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
    //       style={style.image}>
    //       <Text style={{color:"white", fontSize:25, marginTop:150,marginHorizontal:10,textAlign:"left",width:320,height:"60%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
    //       <TouchableOpacity onPress={()=>{
    //       console.log("Love you yr");
    //       navigation.navigate("Login");
    //     }}>
    //     <Text style={style.button}>LOGIN</Text> 
    //     </TouchableOpacity>

    //     <TouchableOpacity onPress={()=>{
    //       console.log("Love you 2 yr");
    //       navigation.navigate("SignUp");
    //     }}>
       
    //     <Text style={style.button2}>SignUp</Text> 

    //     </TouchableOpacity>
    //   </ImageBackground>
      
    //   <ImageBackground
    //       source={{uri:'https://images.pexels.com/photos/1751279/pexels-photo-1751279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
    //       style={style.image} 
    //   >
    //       <Text style={{color:"white", fontSize:25, marginTop:150,marginHorizontal:10,textAlign:"left",width:320,height:"60%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
    //       <TouchableOpacity onPress={()=>{
    //       console.log("Love you yr");
    //       navigation.navigate("Login");
    //     }}>
    //     <Text style={style.button}>LOGIN</Text> 
    //     </TouchableOpacity>

    //     <TouchableOpacity onPress={()=>{
    //       console.log("Love you 2 yr");
    //       navigation.navigate("SignUp");
    //     }}>
       
    //     <Text style={style.button2}>SignUp</Text> 

    //     </TouchableOpacity>
    //   </ImageBackground>
    //  </Swiper> 
  
  );
}

const style=StyleSheet.create({
  SafeView: {
    flex: 1,
    justifyContent: "center",
  },
  img: {
    width: 400,
    height: 400,
    transform: [{ rotate: "-10deg" }],
    resizeMode:"center",
  
  },
  LoginText: {
    fontSize: 25,
    fontWeight: 700,
  
    marginTop: 20,
    color:"#AD40AF",
    width:300,
    marginLeft:50,
  
   
  },
  LoginText2: {
    fontSize: 25,
    fontWeight: 700,
  
  
    color:"#AD40AF",
    width:300,
    marginLeft:-20
   
  },
  // image:{
  //   height:800,
  //   width:500,
  //   resizeMode: 'contain',  
  // },
  // button:{
  //   backgroundColor:"gray",
  //   width:100,
  //   height:30,

  //   marginHorizontal:60,
  //   paddingLeft:30,
  //   paddingTop:6,
  //   fontWeight:700,
  //   color:"white",
  //   borderRadius:5,
  

  // },
  // button2:{
  //   backgroundColor:"gray",
  //     width:100,
  //     height:30,
  //     borderRadius:5,
  //     fontWeight:700,
  //     color:"white",
  //     paddingLeft:25,
  //     paddingTop:5,
  //     position:"absolute",
  //     top:-30,
  //     left:200
  // }
})
export default HOME;

