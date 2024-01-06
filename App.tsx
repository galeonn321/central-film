import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { config } from "@gluestack-ui/config";
import AppNavigator from "./src/navigators/AppNavigator";
import { Provider } from "react-redux";
import store from "./src/lib/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
}
