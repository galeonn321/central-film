import React from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { useFonts } from "expo-font";
import BottomTabNavigator from "./src/navigators/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import MainNavigator from "./src/navigators/MainNavigator";
import { config } from "@gluestack-ui/config";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
