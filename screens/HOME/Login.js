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
  Alert,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import {AuthContext} from '../../component/context' ;
const Login = ({navigation}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  
  const { signIn }=React.useContext(AuthContext);

  const handleLoginBtn=()=>{
    console.log(email,"email");
    console.log(pass,"password");
    console.log("Dashborad");
    //  navigation.navigate("DashBoard");
    if( email=="" || pass=="" ){
      Alert.alert("Enter Complete Fields!!")
    }
    else if(!(emailRegex.test(email))){
      Alert.alert('Invalid Email');
      setPass("");
 
    }
    else{
      axios.get(`http://192.168.0.106:3000/api/auth/login/${email}/${pass}`).then((res)=>{
        // console.log(res,"resss");
        console.log(res.data[0].msg, "res");
        if(res.data[0].msg==1){
          Alert.alert("Email Not Registered!!");
          setEmail("");
          setPass("");
        }
        else{
          Alert.alert(`${res.data[0].msg}`);
                console.log(res.data[0].nm,"name from databse");
                console.log(res.data[0],"name from databse");
                const name=res.data[0].nm;
                const user_id=res.data[0].id.toString();
                signIn(user_id);
                navigation.navigate("DashBoard", {myName: `${name}`});
      
              setEmail("");
              setPass("");
             
        }
  }).catch((err)=>{
        console.log(err,"errrr");
  })
    }
  }
  return (
    <SafeAreaView style={style.SafeView}>
      <View style={{ paddingHorizontal: 50 }}>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/loggin.png")} style={style.img} />
        </View>
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
            value={pass}
            onChangeText={(actualData)=>{setPass(actualData)}}
          />
          <TouchableOpacity onPress={() => { console.log("ForgetPassword"); navigation.navigate("ForgetPassword");}}>
            <Text style={{ fontWeight: 700, color: "#AD40AF" }}>Forget</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleLoginBtn}
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
};

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
export default Login;
