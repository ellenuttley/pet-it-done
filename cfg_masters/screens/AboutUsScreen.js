import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, Text, View , Button, TouchableOpacity, ImageBackground, SafeAreaView, Image} from 'react-native';
import {AboutText} from '../content/about';
import BackButton from "../components/backButton";

export default function AboutUsScreen({ navigation }) {

return (
  <View style={styles.container}>
  <ImageBackground source={require('../assets/images/background_images/blue-background.png')} resizeMode="cover" style={styles.image}>
  <ScrollView style={styles.cardContainer}>
  
    <View>
      <Text style={styles.text}>{AboutText}</Text>   
        </View>
        <Image style={styles.header} source={require('../assets/images/headers/aboutUs-header-tp.png')}/>
        </ScrollView>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('HowToUse')}>How to Use PetitDone</Text>
        </TouchableOpacity>
        <BackButton />
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
      resizeMode: 'contain',
      position: "absolute",
      top: 0, left: 0,
      justifyContent: 'center',
      padding: 30,

      
    },
  buttonStyle: {
      backgroundColor: "#FAF2A3",
      margin: 15,
      padding: 10,
      borderRadius: 30,
      width: 200,
      alignSelf: 'center',
      justifyContent: 'center',
    
    },
  // backgroundImage: {
  //   opacity: .1,               
  //   },

  header: {
    resizeMode: 'contain',
    width: 280, 
    height: 20, 
    padding: 35,
    alignSelf: 'center',
    position: 'absolute', top: 20,
    alignSelf: 'center',
  },

  text: {
    fontSize: 15,
    fontWeight: 'normal',
    fontFamily: 'IreneFlorentina',
    textAlign: 'center',
    margin: -50,
    textAlign :'center',
    marginTop: 80,
    marginBottom: 1
  },
  buttonText: {
    fontSize: 14,
    alignSelf: 'center',
    lineHeight: 16,
    fontWeight: 'normal',
    // letterSpacing: 0.25,
    color: '#280003',
    fontFamily: 'IreneFlorentina',
    textAlign :'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    
  },
  cardContainer:{
    flex: 1,
    // justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(176, 227, 240, 0.7)',
    // alignItems: 'center',
  },
  paragraph: { 
    resizeMode: 'contain',
    fontSize: 20,
    margin: -50,
    textAlign :'center',
    fontSize: 15,
    fontWeight: 'normal',
    fontFamily: 'IreneFlorentina',
  },

   
});
