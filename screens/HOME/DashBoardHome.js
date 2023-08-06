import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
  } from "react-native";
const DashBoardHome=()=>{
    return(
        <View style={{flex:1}}>
           <View style={{flexDirection:'row',marginTop:40}}>
               <Text>Total Infant</Text>
               <Text>10</Text>
           </View>
           <View style={{marginTop:40, height:'25%', margin:20,backgroundColor:'white',borderRadius:30,  elevation: 10,}}>
               <View style={{flexDirection:"row", marginTop:15,marginLeft:60}}>

               <Text style={{fontSize:25}}>Oxygen</Text>
               <Text style={{marginLeft:75,fontSize:25}}>80</Text>
               </View>   
               <View style={{flexDirection:"row",marginTop:15,marginLeft:60}}>

               <Text style={{fontSize:25}}>Oxygen</Text>
               <Text style={{marginLeft:75, fontSize:25,}}>80</Text>
               </View>
               <View style={{marginTop:15,marginLeft:90, borderRadius:20,width:'40%'}}>
                   <TouchableOpacity 
                      style={{ backgroundColor: "#AD40AF", padding:7, borderRadius:10, }}
                   >
                     <Text  style={{fontSize:17,textAlign: 'center', color:"white"}}>Hello</Text>
                   </TouchableOpacity>
               </View>
               
           </View>
           <View style={{marginTop:40, height:'25%', margin:20,backgroundColor:'white',borderRadius:30,  elevation: 10,}}>
               <View style={{flexDirection:"row", marginTop:15,marginLeft:60}}>

               <Text style={{fontSize:25}}>Oxygen</Text>
               <Text style={{marginLeft:75,fontSize:25}}>80</Text>
               </View>   
               <View style={{flexDirection:"row",marginTop:15,marginLeft:60}}>

               <Text style={{fontSize:25}}>Oxygen</Text>
               <Text style={{marginLeft:75, fontSize:25,}}>80</Text>
               </View>
               <View style={{marginTop:15,marginLeft:90, borderRadius:20,width:'40%'}}>
                   <TouchableOpacity 
                      style={{ backgroundColor: "#AD40AF", padding:7, borderRadius:10, }}
                   >
                     <Text  style={{fontSize:17,textAlign: 'center', color:"white"}}>Hello</Text>
                   </TouchableOpacity>
               </View>
               
           </View>
        </View>
    )
}


export default DashBoardHome;