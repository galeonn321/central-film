import React from 'react'
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from '@gluestack-ui/config';
import MyStack from './src/navigators/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
