import { createStackNavigator } from '@react-navigation/stack';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { ArrowDownIcon, ArrowLeftIcon, Image } from '@gluestack-ui/themed';

const Stack = createStackNavigator();

function MyStack() {

    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
        >
            <Stack.Screen options={{
                headerBackImage: () => <ArrowDownIcon color='#fff' size={30} />, title: ' ', headerBackTitle: ' ', headerShadowVisible: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#000', },
            }} name="DetailMovie" component={MovieDetailScreen} />
            <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export default MyStack;
