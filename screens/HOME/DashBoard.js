import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View, Text,SafeAreaView } from "react-native";

import AddInfant from "./AddInfant";
import UpdateInfant from "./UpdateInfant";
import DeleteInfant from "./DeleteInfant";
import DashBoardHome from "./DashBoardHome";
import DisplayInfant from "./DisplayInfant";
import CustomDrawer from "../../customDrawer/CustomDrawer";
import ReloadableDisplayInfant from "../../reloadAbleComponents/reloadableDisplayInfant";
// const Drawer = createDrawerNavigator();
const DashBoard = ({myName}) => {
  // { route }
  console.log(myName,"myname")
  const Drawer = createDrawerNavigator();
 
  // const { myName } = route.params;
  return (
        <Drawer.Navigator initialRouteName="DashBoard"  drawerContent={props => <CustomDrawer {...props} />}  screenOptions={{drawerActiveBackgroundColor:"#AD40AF", drawerActiveTintColor:"#fff", drawerInactiveTintColor:'#333'}} >
          <Drawer.Screen name="Dash Board" component={DashBoardHome} />
          <Drawer.Screen name="Add Infant Info" component={AddInfant} />
          <Drawer.Screen name="Display Infants" component={ReloadableDisplayInfant} />
          {/* <Drawer.Screen name="Update Infant Info" component={UpdateInfant} />
          <Drawer.Screen name="Delete Infant Info" component={DeleteInfant} /> */}
        </Drawer.Navigator>
  );
};

export default DashBoard;
