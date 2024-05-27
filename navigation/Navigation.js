// navigation/Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Question1Screen from '../screens/Question1Screen';
import Question2Screen from '../screens/Question2Screen';
import Question3Screen from '../screens/Question3Screen';
import Question4Screen from '../screens/Question4Screen';
import Question5Screen from '../screens/Question5Screen';
import ThankYouScreen from '../screens/ThankYouScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Question1" component={Question1Screen} />
        <Stack.Screen name="Question2" component={Question2Screen} />
        <Stack.Screen name="Question3" component={Question3Screen} />
        <Stack.Screen name="Question4" component={Question4Screen} />
        <Stack.Screen name="Question5" component={Question5Screen} />
        <Stack.Screen name="ThankYou" component={ThankYouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
