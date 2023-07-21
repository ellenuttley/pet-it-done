import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import PetScreen from '../screens/PetScreen';
import TaskListScreen from '../screens/TaskListScreen';
import HowToUseScreen from '../screens/HowToUseScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="TaskList" component={TaskListScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Pet" component={PetScreen}/>
        <Stack.Screen name="HowToUse" component={HowToUseScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
