import React, { useState } from 'react';
import { StatusBar, View, TextInput, Button, Alert, StyleSheet, Text, RNButton, ErrorMessage, TouchableOpacity, ImageBackground, Image, TouchableWithoutFeedback, Keyboard, LogBox } from 'react-native';
import BackButton from '../components/backButton';
import { useDispatch } from 'react-redux';
import { getDatabase, ref, onValue, get, set, child } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, UserCredential } from "firebase/auth";
import { setFirstName } from '../redux/features/userDetails/firstNameSlice';
import { setPetName } from '../redux/features/userDetails/petNameSlice';


const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User successfully logged in") // notifies us
      Alert.alert('Login Successful!'); // notifies the user

      const db = getDatabase();
      const dbRef = ref(db);

      get(child(dbRef, `/users/${userCredential.user.uid}`)).then((snapshot) => {
        console.log(snapshot.val());
        if (snapshot.exists()) {
          const firstName = (snapshot.val() && snapshot.val().firstName) || 'No Current User';
          const petName = (snapshot.val() && snapshot.val().petName) || 'No Current Pet';
      
          // sends usersName and petName to redux
          dispatch(setFirstName(firstName));
          dispatch(setPetName(petName));
          navigation.navigate('UserProfile');
        }
        else {
          alert('Error finding user data');
        }
      })
    })
    .catch((error) => {
      let errorMsg = error.code.slice(error.code.indexOf('/') + 1);
      errorMsg = errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1)
        .replace(/\-/g, ' ');
        
      Alert.alert(`Error: ${errorMsg}`);
    });
  }

  return ( 
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background_images/blue-background.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.cardContainer}>
          <BackButton />
          
          <StatusBar />
        
          <Image style={styles.header} source={require('../assets/images/headers/login-header-tp.png')} />
          <Text style={styles.subHeader}>Please enter your login details below</Text>
        
          <TextInput style={styles.input}
            placeholder="email address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput style={styles.input}
            placeholder="password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
            <Text style={styles.textStyle}>Log In</Text>
          </TouchableOpacity>
          <Image style={styles.loginImage} source={require('../assets/images/misc/login-screen-graphic-tp.png')} />
        </View> 
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    resizeMode: 'contain',
    width: 280, 
    height: 45, 
    padding: 45,
    alignSelf: 'center',
    position: 'relative', top: 0,
    alignSelf: 'center',
  },
  cardContainer:{
    flex: 1,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(176, 227, 240, 0.7)',
    alignItems: 'center',
},
  subHeader: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: '#280003',
    margin: 10,
    marginBottom: 1,
    padding: 6,
    fontFamily: 'IreneFlorentina',
    textAlign: 'center'
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    color: '#280003',
    fontFamily: 'IreneFlorentina'
  },
  container: {
    flex: 1,
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
  input: {
    height: 40,
    width: 200,
    margin: 10,
    // borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#FEFAFA',
    textAlign: 'center',
    fontFamily: 'IreneFlorentina'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    
  },
  loginImage: {
    resizeMode: 'contain',
    width: 300,
    height: 180,
    position: 'relative', bottom: 10,
    alignSelf: 'center',
  }
});

export default LoginScreen;



