import {React} from 'react';
import { View, Text,SafeAreaView,StyleSheet,  TextInput,TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
const UpdateInfant=({navigation})=>{
    return (
        <SafeAreaView style={style.SafeView}>
          <View style={{ paddingHorizontal: 50 }}>
            
            <Text style={style.LoginText}> Login </Text>
    
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingBottom: 1,
                marginBottom: 25,
              }}
            >
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 7 }}
              />
              <TextInput
                placeholder="Enter Email"
                style={{ flex: 1, paddingVertical: 0 }}
                keyboardType="email-address"
                // value={email}
                // onChangeText={(data)=>{setEmail(data)}}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingBottom: 1,
                marginBottom: 25,
              }}
            >
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 7 }}
              />
              <TextInput
                placeholder="Enter Password"
                style={{ flex: 1, paddingVertical: 0 }}
                // secureTextEntry={true}
                // value={pass}
                // onChangeText={(actualData)=>{setPass(actualData)}}
              />
             
            </View>
            <TouchableOpacity
            //   onPress={handleLoginBtn}
              // onPress={signIn()}
              style={{ backgroundColor: "#AD40AF", padding:20, borderRadius:10, marginBottom:30 }}
            >
              <Text style={{ fontWeight: 700, fontSize:17, color:"white" ,textAlign:"center" }}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row",  justifyContent:"center",marginBottom:30  }}>
                <Text>New To the App?</Text>
                <TouchableOpacity onPress={()=>{ console.log("Register Button");   navigation.navigate("SignUp");}} >
                    <Text style={{fontWeight:700, color:"#AD40AF", marginLeft:5}}>Register</Text>
                </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      );
}


const style = StyleSheet.create({
    SafeView: {
      flex: 1,
      justifyContent: "center",
    },
    img: {
      width: 300,
      height: 300,
      transform: [{ rotate: "-5deg" }],
      resizeMode:"center"
    },
    LoginText: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 30,
      marginTop: 20,
    },
  });


export default UpdateInfant;

