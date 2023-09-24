import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../component/context";
import AsynStorage from '@react-native-async-storage/async-storage';
const AddInfant =  () => {
  
  const [infantInfo, setInfantInfo] = useState({
    name: "",
    age: "",
    weight:"",
    height:"",
    sleep_hours:"",
    feeding:"",
    immune_status:"",
    bloodGroup: "",
    gender: "",
  });
  const handleAddInfo = async() => {
    console.log(infantInfo, "info");
    let token="";
    try{
      token= await AsynStorage.getItem('userToken');
      const tok=parseInt(token);
      console.log(tok);
      axios.post('http://192.168.0.106:3000/api/infant/addInfant',{
       info: infantInfo,
       user_id:tok
      }, {
        headers: {
          'Content-Type': 'application/json',
        },}
      ).then((res)=>{
        console.log(res.data[0].msg,"DATA")
        Alert.alert(`${res.data[0].msg}`);
        setInfantInfo("");
      }).catch((err)=>{
          console.log(err);
      })
    } 
    catch(e){
        console.log(e)
    }
  };
  return (
    <>  
      <ScrollView>
              <View style={{ paddingHorizontal: 50 }}>
        <Text style={style.LoginText}> Add Infant Information </Text>
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
            placeholder="Enter Infant Name"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
            value={infantInfo.name}
            onChangeText={(data) => {
              setInfantInfo({ ...infantInfo, name: data });
            }}
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
            name="md-time"
            size={20}
            color="#666"
            style={{ marginRight: 7 }}
          />
          <TextInput
            placeholder="Enter Infant Age in Month"
            style={{ flex: 1, paddingVertical: 0 }}
            value={infantInfo.age}
            onChangeText={(data) => {
              setInfantInfo({ ...infantInfo, age: data });
            }}
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
            name="fitness-center"
            size={20}
            color="#666"
            style={{ marginRight: 7 }}
          />
          <TextInput
            placeholder="Enter Weight in Kg"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
            value={infantInfo.weight}
            onChangeText={(data) => {
              setInfantInfo({ ...infantInfo, weight: data });
            }}
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
            name="arrow-upward"
            size={20}
            color="#666"
            style={{ marginRight: 7 }}
          />
          <TextInput
            placeholder="Enter Height in Cm"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
            value={infantInfo.height}
            onChangeText={(data) => {
              setInfantInfo({ ...infantInfo, height: data });
            }}
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
            name="king-bed"
            size={20}
            color="#666"
            style={{ marginRight: 7 }}
          />
          <TextInput
            placeholder="Enter Sleep Hours"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
            value={infantInfo.sleep_hours}
            onChangeText={(data) => {
              setInfantInfo({ ...infantInfo, sleep_hours: data });
            }}
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
            name="baby-changing-station"
            size={20}
            color="#666"
            style={{ marginRight: 7 }}
          />
          <TextInput
            placeholder="Enter Feeding Method"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
            value={infantInfo.feeding}
            onChangeText={(data) => {
              setInfantInfo({ ...infantInfo, feeding: data });
            }}
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
            name="local-hospital"
            size={20}
            color="#666"
            style={{ marginRight: 7 }}
          />
          <TextInput
            placeholder="Enter Immunization status"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
            value={infantInfo.immune_status}
            onChangeText={(data) => {
              setInfantInfo({ ...infantInfo, immune_status: data });
            }}
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
            name="healing"
            size={20}
            color="#666"
            style={{ marginRight: 7 }}
          />
          <TextInput
            placeholder="Enter Blood Group"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
            value={infantInfo.bloodGroup}
            onChangeText={(data) => {
              setInfantInfo({ ...infantInfo, bloodGroup: data });
            }}
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
            name="person"
            size={20}
            color="#666"
            style={{ marginRight: 7 }}
          />
          <TextInput
            placeholder="Enter Gender"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
            value={infantInfo.gender}
            onChangeText={(data) => {
              setInfantInfo({ ...infantInfo, gender: data });
            }}
          />
        </View>
     
        <TouchableOpacity
          onPress={handleAddInfo}
          style={{
            backgroundColor: "#AD40AF",
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontWeight: 700,
              fontSize: 17,
              color: "white",
              textAlign: "center",
            }}
          >
            Add Information
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>

    </>
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
    resizeMode: "center",
  },
  LoginText: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 30,
    marginTop: 20,
  },
});

export default AddInfant;
