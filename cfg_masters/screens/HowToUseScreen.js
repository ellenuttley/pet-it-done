import { StyleSheet, ScrollView, Text, View , Button, TouchableOpacity, ImageBackground, SafeAreaView, Image} from 'react-native';
import BackButton from "../components/backButton";

export default function HowToUseScreen({ navigation }) {

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/images/background_images/blue-background.png')} resizeMode="cover" style={styles.image}>
    <ScrollView style={styles.cardContainer}>
    <View>

        <Image style={styles.header} source={require('../assets/images/headers/HowtoUse-header-tp.png')}/>
        <Image style={styles.textImage} source={require('../assets/images/misc/instructions.png')}/>
      
        </View>
        </ScrollView>
        <BackButton />
      </ImageBackground>
      </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    header: {
      resizeMode: 'contain',
      width: 280, 
      height: 20, 
      padding: 35,
      alignSelf: 'center',
      position: 'absolute', top: 60,
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
      color: '#280003',
      fontFamily: 'IreneFlorentina',
      textAlign :'center',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      padding: 25,
      
    },
    cardContainer:{
      flex: 1,
      borderRadius: 30,
      padding: 0,
      backgroundColor: 'rgba(176, 227, 240, 0.7)',

    },
    textImage: {
        resizeMode: 'contain',
        width: "100%" ,
        justifyContent: 'center',
        padding: 0,
        alignSelf: 'center',
        
      },

  
     
  });
  
