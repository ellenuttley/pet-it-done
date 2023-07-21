import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDirtyStatus, setHungryStatus, setBoredStatus } from '../redux/features/petNeeds/petNeedsSlice';
import { setDirtyNeedChosen, setHungryNeedChosen, setBoredNeedChosen } from '../redux/features/petNeeds/needsChosenSlice';
import { useNavigation } from '@react-navigation/native';
import {View, ImageBackground, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import BackButton from '../components/backButton';
import HungryButton from '../components/hungryButton';
import DirtyButton from '../components/dirtyButton';
import BoredButton from '../components/boredButton';
import DirtyBubble from '../components/bubbles/dirtyBubble';
import BoredBubble from '../components/bubbles/boredBubble';
import HungryBubble from '../components/bubbles/hungryBubble';
import Pet from '../components/pets/pet';
// import HappyPet from '../components/pets/happyPet';
// import SadPet from '../components/pets/sadPet';


export default function PetScreen({ navigation }) {
  const petName = useSelector((state) => state.petName.petName);
  const petNeeds = useSelector((state) => state.petNeeds);
  const needsChosen = useSelector((state) => state.needsChosen);
  const dispatch = useDispatch();
  const currentTime = Date.now();

  const isHappy = () => {
    for (let need in petNeeds) {
      if (petNeeds[need].refreshTime < currentTime || petNeeds[need].status) {
        return false;
      }
    }
    return true;
  };

  const handleDirtyPress = () => {
    console.log("dirty button pressed")
    dispatch(setDirtyStatus(false));
    dispatch(setDirtyNeedChosen(false));
  };


  const handleHungryPress = () => {
    console.log('hungry button pressed')
    dispatch(setHungryStatus(false));
    dispatch(setHungryNeedChosen(false));
  };


  const handleBoredPress = () => {
    console.log('bored button pressed')
    dispatch(setBoredStatus(false));
    dispatch(setBoredNeedChosen(false));
  };


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background_images/blue-background.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.cardContainer}>
          <BackButton />
      
          <Image source={require('../assets/images/pet_graphics/petpage-yellow.png')} style={{resizeMode: 'contain', width: "80%", height: "30%", opacity: 0.7, padding: 15, alignSelf: 'center', position: 'absolute', top: 55}}></Image>
          <Image style={styles.header} source={require('../assets/images/headers/petPage-header-tp.png')}></Image>
          <Text style={styles.title}>{petName}</Text>
          
          <Image source={require('../assets/images/pet_graphics/petpage-plant.png')} style={{resizeMode: 'contain', width: 600, height: 100,  borderRadius: 100, padding: 10, opacity: 0.7, alignSelf: 'center', position: 'absolute', bottom: 105,}}></Image>

          <Pet happy={isHappy()} />
          {/* <HappyPet /> */}
          {/* < SadPet /> */}
        </View>

        { petNeeds.dirty.status || petNeeds.dirty.refreshTime < currentTime ? <DirtyBubble/> : null }
        { petNeeds.hungry.status || petNeeds.hungry.refreshTime < currentTime ? <HungryBubble /> : null }
        { petNeeds.bored.status || petNeeds.bored.refreshTime < currentTime ? <BoredBubble /> : null }
  
        { needsChosen.dirty ? <DirtyButton onPress={handleDirtyPress} /> : null }
        { needsChosen.hungry ? <HungryButton onPress={handleHungryPress} /> : null }
        { needsChosen.bored ? <BoredButton onPress={handleBoredPress}/> : null }

        <TouchableOpacity style={styles.buttonStyle} onPress={() => {navigation.navigate('TaskList')}}>
            <Text style={styles.textStyle}>Do a Task?</Text>
          </TouchableOpacity>
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
    padding: 30,
    
  },
  cardContainer:{
    flex: 1,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(176, 227, 240, 0.7)',
    alignItems: 'center',
},
  overlayImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    borderRadius: 30, 
  },
  header: {
    resizeMode: 'contain',
    width: 260, 
    height: 20, 
    padding: 35,
    alignSelf: 'center',
    position: 'absolute', top: 45,
    alignSelf: 'center',

  },
  title: {
    fontSize: 40,
    elevation: 4,
    alignSelf: 'center',
    fontFamily: 'IreneFlorentina',
    color: '#280003',
    position: 'absolute', top: 50, 
  },
  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 300,
    elevation: 3,
    backgroundColor: '#FAF2A3',
    position: 'absolute', top: 135, 
    margin: 10,
  },
  textStyle: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'normal',
    color: '#280003',
    fontFamily: 'IreneFlorentina'
  },
  petStyle: {
    resizeMode: 'contain', 
    width: 200, 
    position: 'absolute', 
    bottom: -60
  }
});
