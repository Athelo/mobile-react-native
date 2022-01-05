import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsFeed from './components/NewsFeed'
import Welcome from './components/Welcome'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="News" component={NewsFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}