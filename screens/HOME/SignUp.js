import React, {useState} from "react";
import axios from "axios";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ToastAndroid
  
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "expo-checkbox";
const SignUp = ({navigation}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [agree, setAgree]=useState(false);
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [Pass, setPass]=useState("");
  const [cnfrmPass, setcnfrmPass]=useState("");
  const handleRegisterBtn=  ()=>{
    console.log(name, "N");
    console.log(email, "E");
    console.log(Pass, "P");
    console.log(cnfrmPass, "CP");
   
    if(name=="" || email=="" || Pass=="" || cnfrmPass==""){
      Alert.alert("Enter Complete Fields!!")
    }
    else if(!(emailRegex.test(email))){
      Alert.alert('Invalid Email');
      setEmail("");
      setPass("");
      setcnfrmPass("");
    }
    else if(Pass!=cnfrmPass){
      Alert.alert("Password Not Match!!");
      setPass("");
      setcnfrmPass("");
    }
    else{
      // const UserDat={
      //   name:name,
      //   email:email,
      //   Pass:Pass,
      //   cnfrmPass:cnfrmPass 
      // }
      // console.log(UserDat, "obj");
      // const response=await fetch("http://localhost:3000/api/auth/register/s/s/s").then((asd)=>{
      //   console.log(asd, "then");
      // }).catch((asdd)=>{
      //   console.log(asdd,"ggg");
      // });
      //   console.log(response, "sada");
      // axios.post("http://192.168.0.115:3000/api/auth/register",{
      //   UserDat
      // },{
      
      // }).then((res)=>{
      //       console.log(res.data, "res");
      // }).catch((err)=>{
      //       console.log(err,"errrr");
      // })

      axios.get(`http://192.168.0.104:3000/api/auth/register/${name}/${email}/${Pass}`).then((res)=>{
            console.log(res.data[0].msg, "res");
            if(res.data[0].msg==1){
              Alert.alert("Email Already Exist!!");
            }
            else{
              Alert.alert(`${res.data[0].msg}`);
                  navigation.navigate("Login");
                  setName("");
                  setEmail("");
                  setPass("");
                  setcnfrmPass("");
                  setAgree(false);
            }
      }).catch((err)=>{
            console.log(err,"errrr");
      })
        // fetch("http://192.168.0.115:3000/api/auth/register",{
        //   method:'POST',
        //   headers:{
        //     'Accept':'application/json',
        //     'Content-Type':'application/json'
        //   },
        //   body:JSON.stringify({
        //     name:`${name}`,
        //     email:`${email}`,
        //     Pass:`${Pass}`,
        //     cnfrmPass:`${cnfrmPass}` 
        //   })
        // }).then((response)=>response.json()).then((responseJson)=>{
        //   console.log(responseJson, "dsad");
        // }).catch((error)=>{
        //   console.log(error, "err");
        // })
      
    }
    

  };
  const handleLoginBtn=()=>{
    setName("");
    setEmail("");
    setPass("");
    setcnfrmPass("");
    setAgree(false);
    console.log("Register Button");
       navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={style.SafeView}>
   
      <View style={{ paddingHorizontal: 50 }}>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/loggin.png")} style={style.img} />
        </View>
        <Text style={style.LoginText}> Register YourSelf </Text>
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
            name="person"
            size={20}
            color="#666"
            style={{ marginRight: 7 }}
          />
          <TextInput
            placeholder="Enter Name"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="default"
            value={name}
            onChangeText={(data)=>{setName(data)}}
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
            value={email}
            onChangeText={(data)=>{setEmail(data)}}
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
            secureTextEntry={true}
            maxLength={20}
            value={Pass}
            onChangeText={(data)=>{setPass(data)}}
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
            placeholder="Confirm Password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            maxLength={20}
            value={cnfrmPass}
            onChangeText={(data)=>{setcnfrmPass(data)}
          
         }
          />
       
        </View>
        <View style={{ 
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 20,
            }}>
        <CheckBox
          value={agree}
          onValueChange={() => {setAgree(!agree)}}
          color={agree ? "#AD40AF" : undefined}
        />
        <Text style={{fontWeight:700, marginLeft:10}}>
          I have read and agreed with the terms and conditions
        </Text>
      </View>

        <TouchableOpacity
          onPress={handleRegisterBtn}
          style={{ backgroundColor: agree ? "#AD40AF" : "gray", padding:20, borderRadius:10, marginBottom:30 }}
          disabled={!agree}
        >
          <Text style={{ fontWeight: 700, fontSize:17, color:"white" ,textAlign:"center" }}>Register</Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row",  justifyContent:"center",marginBottom:30  }}>
            <Text>Already Registerd To the App?</Text>
            <TouchableOpacity onPress={handleLoginBtn} >
                <Text style={{fontWeight:700, color:"#AD40AF", marginLeft:5}}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
  
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  SafeView: {
    flex: 1,
    justifyContent: "center",
  },
  img: {
    width: 300,
    height: 230,
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
export default SignUp;
