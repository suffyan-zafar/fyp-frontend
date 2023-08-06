import React, {useState} from "react";

import { View, Text,SafeAreaView, TouchableOpacity } from "react-native";

import { AuthContext } from "../../component/context";
const SignOut = () => {
   const {signOut}=React.useContext(AuthContext);
   handleSignOut=()=>{
     console.log("Hello");
     signOut();
   }
    return (
        <View>
            {signOut()}
        </View>
    );
  };


export default SignOut;