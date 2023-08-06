import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import SignOut from "../screens/HOME/SignOut";
import { AuthContext } from "../component/context";

const CustomDrawer = (props) => {
    const {signOut}=React.useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#AD40AF" }}
      >
        <Image
          source={require("../assets/user.jpg")}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            marginBottom: 10,
            marginLeft: 20,
          }}
        />
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 20 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => { console.log("SignOut Run"); signOut()}} style={{ paddingVertical: 18 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={25} />
            <Text style={{ fontSize: 18, marginLeft: 8 }}>Sign Out </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
