import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        options={{
          title: "",
          headerBackTitle: "",
          headerShadowVisible: false,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#000" },
        }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{
          title: "",
          headerBackTitle: "",
          headerShadowVisible: false,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#000" },
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          title: "",
          headerBackTitle: "",
          headerShadowVisible: false,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#000" },
        }}
        name="Register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
