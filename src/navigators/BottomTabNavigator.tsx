import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FilmsScreen from "../screens/FilmsScreen";
import SeriesScreen from "../screens/SeriesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#040D12",
          position: "absolute",
        },
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={10}
            style={StyleSheet.absoluteFill}
          />
        ),
        // tabBarIcon: ()=>(
        //     <HomeIcon
        // )
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
      <Tab.Screen name="Series" component={SeriesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
