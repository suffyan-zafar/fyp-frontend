import React, { useEffect, useState } from "react";
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
import AsynStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const DisplayInfant = () => {
    const [data,setData]=useState([]);
 // useEffect(() => {
    // const getAsyncStorage = async () => {
    //   let token = "";
    //   try {
    //     token = await AsynStorage.getItem("userToken");
    //     const tok = parseInt(token);
    //     console.log(tok);
    //     axios
    //       .get(`http://192.168.0.106:3000/api/infant/display/${tok}`)
    //       .then((res) => {
    //         // console.log(res.data, "data");
    //         if(res.data.length>0){
    //             setData(res.data);
    //         }
    //         else{
    //             Alert.alert("No Record Founnd!")
    //         }
        
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    // getAsyncStorage();
 // },[]);
  useFocusEffect(
    React.useCallback(() => {
    const getAsyncStorage = async () => {
      let token = "";
      try {
        token = await AsynStorage.getItem("userToken");
        const tok = parseInt(token);
        console.log(tok);
        axios
          .get(`http://192.168.0.106:3000/api/infant/display/${tok}`)
          .then((res) => {
            // console.log(res.data, "data");
            if(res.data.length>0){
                setData(res.data);
            }
            else{
                Alert.alert("No Record Founnd!")
            }
        
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    };

    getAsyncStorage();
    }, [])
  );


  const handleDelete=( id)=>{
    console.log(id,"delete")
    axios.delete(`http://192.168.0.106:3000/api/infant/deleteInfant/${id}`).then((res)=>{
        console.log(res.data, "data")
        Alert.alert(`${res.data[0].msg}`);
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    }).catch((error)=>{
        console.log(error);
    })
  }

  return (

    <ScrollView style={styles.container}>
    {data.length>0? data.map(item => (
      <View key={item.id}  style={styles.item}>
        <Text style={styles.text}>Name: {item.infant_name}</Text>
        <Text style={styles.text}>Age In Month: {item.age_in_month}</Text>
        <Text style={styles.text}>Weight in Kg: {item.weight_in_kg}</Text>
        <Text style={styles.text}>Height in Cm: {item.height_in_cm}</Text>
        <Text style={styles.text}>Sleeping Hours: {item.sleep_hours}</Text>
        <Text style={styles.text}>Feeding Type: {item.feeding_method}</Text>
        <Text style={styles.text}>Immune Status: {item.immune_status}</Text>
        <Text style={styles.text}>Blood Group: {item.infant_blood}</Text>
        <Text style={styles.text}>Gender: {item.infant_gender}</Text>
        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          // onPress={signIn()}
          style={{ backgroundColor: "#fff", padding:5, borderRadius:5,width:100 }}
        >
          <Text style={{ fontWeight: 700, fontSize:13, color:"#AD40AF" ,textAlign:"center" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    )) : <Text style={styles.emptyText}> Add Infants!!</Text> }
  </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    item: {
      marginBottom: 16,
      backgroundColor: '#AD40AF',
      padding: 16,
      borderRadius: 8,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color:"#fff"
    },
    emptyText: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 100,
    },
  });

export default DisplayInfant;
