import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsynStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {Audio} from "expo-av";
import { Vibration } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const DashBoardHome = () => {
  const arr = [true, false];
  const arr2 = ["School", "College", "Postgraduate"];
  const prediction=["Healthy","Sick"];
  const [condition,setCondition]=useState("");
  const [data, setData] = useState([]);
  const [infant_name, set_Infant_Name] = useState("");
  const [loading, setLoading] = useState(false);
  const [sound, setSound] = useState();
  useEffect(() => {
    // Load the alarm sound when the component mounts
    (async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../../tone/ringtone.mp3")
      );
      setSound(sound);
    })();
  }, [loading]);

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
              if (res.data.length > 0) {
                setData(res.data);
              } else {
                Alert.alert("No Record Founnd!");
                setData("");
                setCondition("");
                set_Infant_Name("");
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
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const getRandomNumberWithDecimal = (min, max, decimalPlaces) => {
    const factor = 10 ** decimalPlaces;
    const minInt = min * factor;
    const maxInt = max * factor;
    const randomInt =
      Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
    return randomInt / factor;
  };
  const handleCheck =async (item) => {
    const tok = await AsynStorage.getItem("userToken");
    
    console.log(tok);
     console.log(item.id, "infant id");
    const {age_in_month,feeding_method,height_in_cm,immune_status,sleep_hours,weight_in_kg,name}=item;
    const infant_id=item.id;
    // console.log(age_in_month);
    // console.log(feeding_method);
    // console.log(height_in_cm);
    // console.log(immune_status);
    // console.log(sleep_hours);
    // console.log(weight_in_kg);
    console.log(item.infant_name,"ifnat name")
    setLoading(true);
    set_Infant_Name(item.infant_name);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);

    const Oxygen_Saturation = getRandomNumber(90, 105);
    const pulse_rate = getRandomNumber(60, 160);
    const Temperature_C = getRandomNumberWithDecimal(35.0, 40.0, 1);
    const fever = getRandomNumber(0, 1);
    const Respiratory_Rate = getRandomNumber(1, 40);
    const Cough = getRandomNumber(0, 1);
    const Runny_Nose = getRandomNumber(0, 1);
    const Skin_Rash = getRandomNumber(0, 1);
    const Vomiting = getRandomNumber(0, 1);
    const Diarrhea = getRandomNumber(0, 1);
    const Blood_Pressure_upper = getRandomNumber(110, 130);
    const Blood_Pressure_lower = getRandomNumber(70, 90);
    const Blood_Pressure = Blood_Pressure_upper + "/" + Blood_Pressure_lower;
    const Hygiene_Score = getRandomNumber(1, 10);
    const Parental_Education = arr2[getRandomNumber(0, 2)];
    const Family_Income = getRandomNumber(50000, 200000);
   axios.post("http://192.168.0.106:3000/api/model/processData",{
   infant_id:infant_id,
   user_id:tok,
   Age_Months:age_in_month,
   Weight_Kg:weight_in_kg,
   Height_Cm:height_in_cm,
   Oxygen_Saturation:Oxygen_Saturation,
   Pulse_Rate:pulse_rate,
   Temperature_C:Temperature_C,
   Fever:fever,
   Respiratory_Rate:Respiratory_Rate,
   Cough:Cough,
   Runny_Nose:Runny_Nose,
   Skin_Rash:Skin_Rash,
   Vomiting:Vomiting,
   Diarrhea:Diarrhea,
   Blood_Pressure:Blood_Pressure,
   Sleep_Duration_Hrs:sleep_hours,
   Feeding_Method:feeding_method,
   Immunization_Status:immune_status,
   Hygiene_Score:Hygiene_Score,
   Parental_Education:Parental_Education,
   Family_Income:Family_Income
  }
   ).then((res) => {
    console.log(res.data, "data");
    if(res.data){
      setCondition(prediction[res.data.Prediction]);
      // Alert.alert(`${res.data.message}`)
      if(res.data.Prediction==1){
        sound.playAsync();
        Vibration.vibrate([1000, 4000], false);
      }
      setLoading(false);
      // setTimeout(()=>{
      //   Vibration.cancel();
      // },4000)
    }
      })
  .catch((error) => {
    console.log(error, "er");
  });
    

  };

  const handleReport=async ()=>{
    console.log("report");
    try {
      let options = {
        html: '<h1>PDF TEST</h1>',
        fileName: 'test',
        directory: 'Documents',
      };
  
      let file = await RNHTMLtoPDF.convert({
        html: '<h1>PDF TEST</h1>',
        fileName: 'test',
        directory: 'Documents',
      });
      // console.log(file.filePath);
      alert(file.filePath);
  
    } catch (err) {
      console.error('Error creating PDF:', err);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          backgroundColor: "#AD40AF",
          padding: 5,
          borderRadius: 3,
          width: "35%",
          marginLeft: 120,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Total Infant :
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {data.length > 0 ? data.length : 0}
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          height: "30%",
          margin: 10,
          backgroundColor: "white",
          borderRadius: 10,
          elevation: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              width: 100,
              fontSize: 14,
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Infant Name
          </Text>

          <Text
            style={{
              width: 100,
              fontSize: 14,
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Infant Age
          </Text>
          <Text
            style={{
              width: 70,
              fontSize: 14,
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Gender
          </Text>
          <Text
            style={{
              width: 60,
              fontSize: 14,
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
            }}
          >
            Action
          </Text>
        </View>
        <ScrollView>
          {data.length > 0 ? (
            data.map((item, index) => (
              <View key={index} style={{ flexDirection: "row", marginTop: 7 }}>
                {/* <Text style={{ fontSize: 15,width: 100,textAlign: 'center'}}>{item.infant_name}</Text> */}
                <View style={styles.cell}>
                  <Text style={styles.text}>{item.infant_name}</Text>
                </View>
                {/* <Text style={{  width: 100 , fontSize: 15,textAlign: 'center'  }}>{item.infant_age}</Text> */}

                <View style={styles.cell}>
                  <Text style={styles.text}>{item.age_in_month}</Text>
                </View>
                {/* <Text style={{width: 70 , fontSize: 15 ,textAlign: 'center'}}>{item.infant_gender}</Text> */}
                <View style={styles.cell}>
                  <Text style={styles.text}>{item.infant_gender}</Text>
                </View>
                {/* <TouchableOpacity 
                     style={{ backgroundColor: "#AD40AF", padding:5, borderRadius:3,width: 60}}
                   >
                     <Text  style={{fontSize:12,textAlign: 'center', color:"white"}}>Report</Text>
                   </TouchableOpacity> */}
                <View style={styles.cell}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleCheck(item)}
                  >
                    <Text style={styles.buttonText}>Check</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text
              style={{
                marginLeft: 80,
                marginTop: 65,
                fontSize: 20,
                fontWeight: "bold",
                color: "#AD40AF",
              }}
            >
              Record Not Found!
            </Text>
          )}
        </ScrollView>
      </View>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        // <View
        //   style={{
        //     marginTop: 20,
        //     height: "25%",
        //     margin: 20,
        //     backgroundColor: "white",
        //     borderRadius: 30,
        //     elevation: 10,
        //   }}
        // >
          <View style={{ flexDirection: "row",height:50, marginTop: 10,backgroundColor: condition==="" ? "gray" : condition=="Sick" ? "red" : "green" }}>
            <Text style={{ fontSize: 20, color:"white", fontWeight:"bold", paddingLeft:80,paddingTop:10 }}>{condition!="" ? infant_name+" is :"+ condition : "Check Infant Condition"}</Text>
          </View>
          /* <View
            style={{
              marginTop: 15,
              marginLeft: 90,
              borderRadius: 20,
              width: "40%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#AD40AF",
                padding: 7,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ fontSize: 17, textAlign: "center", color: "white" }}
              >
                Hello
              </Text>
            </TouchableOpacity> */
          /* </View> */
        // </View>
      )}
        <TouchableOpacity
              style={{
                backgroundColor: "#AD40AF",
                padding: 7,
                borderRadius: 10,
              }}
              onPress={() => handleReport()}
            >
              <Text
                style={{ fontSize: 17, textAlign: "center", color: "white" }}
              >
                Download Report
              </Text>
            </TouchableOpacity> 
        <View
          style={{
            marginTop: 20,
            height: "25%",
            margin: 20,
            backgroundColor: "white",
            borderRadius: 30,
            elevation: 10,
          }}
        >
           <View
            style={{
              marginTop: 15,
              marginLeft: 90,
              borderRadius: 20,
              width: "40%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#AD40AF",
                padding: 7,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ fontSize: 17, textAlign: "center", color: "white" }}
              >
                Hello
              </Text>
            </TouchableOpacity> 
           </View> 
         </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#AD40AF",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#AD40AF",
    padding: 5,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DashBoardHome;
