import { GluestackUIProvider, config } from "@gluestack-ui/themed";

import { useFonts } from "expo-font";
import BottomTabNavigator from "./src/navigators/BottomTabNavigator";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
