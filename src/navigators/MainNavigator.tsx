import { createStackNavigator } from '@react-navigation/stack';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();
const isSignedIn = false;

function MainNavigator() {

    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
        >
            <Stack.Screen options={{
                title: '', headerBackTitle: '', headerShadowVisible: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#000', },
            }} name="DetailMovie" component={MovieDetailScreen} />

            <Stack.Screen options={{
                title: '', headerBackTitle: '', headerShadowVisible: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#000', },
            }} name="LoginScreen" component={LoginScreen} />

            <Stack.Screen options={{
                title: '', headerBackTitle: '', headerShadowVisible: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#000', },
            }} name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen options={{
                title: '', headerBackTitle: '', headerShadowVisible: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#000', },
            }} name="WelcomeScreen" component={WelcomeScreen} />

            <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={BottomTabNavigator} />

        </Stack.Navigator>
    );
}

export default MainNavigator;
