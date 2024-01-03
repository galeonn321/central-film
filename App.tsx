import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { config } from "@gluestack-ui/config";
import AppNavigator from "./src/navigators/AppNavigator";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
