import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import BottomTabNavigator from "./src/navigators/BottomTabNavigator";

import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/navigators/MainNavigator";

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
