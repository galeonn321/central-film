import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FilmsScreen from "../screens/FilmsScreen";
import SeriesScreen from "../screens/SeriesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#707070",
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={40}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = "";
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

          return (
            <Icon
              name={iconName}
              size={20}
              color={focused ? "#7f1d1d" : "#fff"}
            />
          );
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Films"
        component={FilmsScreen}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Series"
        component={SeriesScreen}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
