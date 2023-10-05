import { createStackNavigator } from '@react-navigation/stack';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import BottomTabNavigator from './BottomTabNavigator';



const Stack = createStackNavigator();

function MyStack() {

    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
        >
            <Stack.Screen options={{
                title: ' ', headerBackTitle: '', headerShadowVisible: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#000', },
            }} name="DetailMovie" component={MovieDetailScreen} />
            <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export default MyStack;
