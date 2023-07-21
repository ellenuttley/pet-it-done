import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';

import background from '../assets/images/background_images/blue-background.png';

const HomePageScreen = ({ navigation }) => {

  return (

    <View style={styles.container}> 

    <ImageBackground
    style={styles.image}
    imageStyle={styles.image}
    source ={background}
    resizeMode='cover'>

    <View style={styles.cardContainer}>
    
    <Image resizeMode="contain"
        style={{width: 380, height: 60, padding: 50}}
      source={require('../assets/images/headers/homepage-header-tp.png')} />
    
    <Image resizeMode="contain"
       style={{width: 150, height: 150, margin: 10}}
      source={require('../assets/images/axolotl.png')} />
      
      <TouchableOpacity style={styles.buttonStyle}>
       <Text style= {styles.text} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.text} onPress={() => navigation.navigate('Login')}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.text} onPress={() => navigation.navigate('AboutUs')}>About Us</Text>
      </TouchableOpacity>
      
      </View>
      </ImageBackground>
      </View> 
  );
};
  

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
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
  
  backgroundImage: {
    opacity: .1,      
  },

  text: {
      fontSize: 20,
      fontWeight: 'normal',
      fontFamily: 'IreneFlorentina'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  overlayImage: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
  }, 
    title: {
      fontSize: 40,
      fontFamily: 'IreneFlorentina'
  },
    cardContainer:{
      flex: 1,
      justifyContent: 'center',
      borderRadius: 20,
      backgroundColor: 'rgba(176, 227, 240, 0.7)',
      alignItems: 'center',
  },
  imageHeader:{
   alignSelf: 'center'

  }
  
 
});

export default HomePageScreen;
