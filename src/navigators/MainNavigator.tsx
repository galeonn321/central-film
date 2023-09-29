import { createStackNavigator } from '@react-navigation/stack';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { ArrowLeftIcon, Image } from '@gluestack-ui/themed';

const Stack = createStackNavigator();

function MyStack() {

    return (
        <Stack.Navigator
            initialRouteName='Home'
        >
            <Stack.Screen options={{
                title: '', headerBackTitle: ' ', headerShadowVisible: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#000' }
            }} name="DetailMovie" component={MovieDetailScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export default MyStack;
