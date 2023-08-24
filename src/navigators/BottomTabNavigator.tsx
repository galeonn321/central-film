import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FilmsScreen from "../screens/FilmsScreen";
import SeriesScreen from "../screens/SeriesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LOG } from "../config/logger";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
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
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = "";
          LOG.error(route.name);
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;

            case "Films":
              iconName = focused ? "film" : "film-outline";
              break;

            case "Series":
              iconName = focused ? "tv" : "tv-outline";
              break;

            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
          }

          return <Icon name={iconName} size={20} color={"#fff"} />;
        },
      })}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Films" component={FilmsScreen} />
      <BottomTab.Screen name="Series" component={SeriesScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
