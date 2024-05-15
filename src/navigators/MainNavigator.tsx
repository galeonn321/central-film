import { createStackNavigator } from "@react-navigation/stack";
import MovieDetailScreen from "../screens/MovieDetailScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const MainStack = createStackNavigator();
const isSignedIn = true;

function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName="HomeScreen">
      <MainStack.Screen
        options={{
          // title: "",
          // headerBackTitle: "",
          // headerShadowVisible: false,
          // headerTintColor: "#fff",
          // headerStyle: { backgroundColor: "#000" },
          headerShown: false
        }}
        name="DetailMovie"
        component={MovieDetailScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={BottomTabNavigator}
      />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
