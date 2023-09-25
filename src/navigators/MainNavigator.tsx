import { createStackNavigator } from '@react-navigation/stack';
import MovieDetailScreen from '../screens/MovieDetailScreen';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DetailMovie" component={MovieDetailScreen} />
        </Stack.Navigator>
    );
}

export default MyStack;
