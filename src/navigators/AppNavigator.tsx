import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();
const isSignedIn = false;

const AppNavigator: React.FC = () => {
    return (
        isSignedIn ? <MainNavigator /> : <AuthNavigator />
    );
};

export default AppNavigator;
