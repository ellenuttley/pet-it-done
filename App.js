import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground, LogBox } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import PetScreen from './screens/PetScreen';
import TaskListScreen from './screens/TaskListScreen';
import HomePageScreen from './screens/HomePageScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import HowToUseScreen from './screens/HowToUseScreen';
import ModalExample from './components/Modal';
import { firebase, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { Provider } from 'react-redux'
import store from './redux/store'
// import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './src/config/db';

// LogBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

const Stack = createStackNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    IreneFlorentina: require('./assets/fonts/IreneFlorentina-Regular.ttf')
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAppData = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAppData();
  }, []);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <Provider store={store}>

      <ImageBackground
        source={require('./assets/images/background_images/background.jpg')} 
        style={styles.backgroundImage}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#fefafa', 
                },
              }}
            >
              <Stack.Screen
                name="HomePage"
                component={HomePageScreen}
                options={{ title: 'Home' }}
              />
              <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ title: 'Sign Up' }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Login' }}
              />
              <Stack.Screen
                name="AboutUs"
                component={AboutUsScreen}
                options={{ title: 'About Us' }}
              />
              <Stack.Screen
                name="HowToUse"
                component={HowToUseScreen}
                options={{ title: 'How to Use' }}
              />
              <Stack.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={{ title: 'User Profile' }}
              />
              <Stack.Screen
                name="Pet"
                component={PetScreen}
                options={{ title: 'Pet Details' }}
              />
              <Stack.Screen
                name="TaskList"
                component={TaskListScreen}
                options={{ title: 'Task List' }}
              />
              <Stack.Screen
                name="Modal"
                component={ModalExample} 
                />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ImageBackground>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(176, 227, 238, 0.9)',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
  },
  buttonStyle: {
    margin: 20,
    backgroundColor: "#FAF2A3",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
    color: '#280003',
    fontFamily: 'IreneFlorentina'
  },
});

export default App;
