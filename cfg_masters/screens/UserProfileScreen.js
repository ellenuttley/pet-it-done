import React from 'react';
import { View, Image, Button, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/backButton';
import { useSelector } from 'react-redux';


export default function UserProfileScreen() {
  const firstName = useSelector((state) => state.firstName.firstName);

  const navigation = useNavigation();

  const handleGoToPet = () => {
    navigation.navigate('Pet');
  };

  const handleGoToList = () => {
    navigation.navigate('TaskList');
  };

  return (

      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/background_images/blue-background.png')} resizeMode="cover" style={styles.image}>
          <BackButton />
          <View style={styles.cardContainer}>
            <Image resizeMode="contain"
              style={{width: 400, height: 60, padding: 30}}
              source={require('../assets/images/headers/userScreen-header-tp.png')} />

            <Text style={styles.title}>{firstName}</Text>

            <Image resizeMode="contain"
              style={{width: 150, height: 150, margin: 20}}
              source={require('.././assets/images/misc/userPage-graphic.png')} />

            <TouchableOpacity style={styles.buttonStyle} onPress={handleGoToPet}>
              <Text style={styles.textStyle}>View Pet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={handleGoToList}>
              <Text style={styles.textStyle}>View Task List</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  overlayImage: {
    flex: 1,
    justifyContent: 'center'
  },
  cardContainer:{
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(176, 227, 240, 0.7)',
    alignItems: 'center',
},
buttonStyle: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 20,
  elevation: 3,
  backgroundColor: '#FAF2A3',
  margin: 10,
  fontFamily: 'IreneFlorentina'
},
title: {
  fontSize: 36,
  fontFamily: 'IreneFlorentina',
  color: '#280003',
},
textStyle: {
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'normal',
  color: '#280003',
  fontFamily: 'IreneFlorentina'
},
imageHeader:{
  alignSelf: 'center'

 }
});