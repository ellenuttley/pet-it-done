import React, { useState } from 'react';
import { Image, ImageBackground, View, TextInput, Button, Alert, StyleSheet, Text, RNButton, ErrorMessage, TouchableOpacity } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, UserCredential } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/backButton';
import { useDispatch } from 'react-redux';
import { setFirstName as firstNameReducer } from '../redux/features/userDetails/firstNameSlice';
import { setPetName as petNameReducer } from '../redux/features/userDetails/petNameSlice';

const SignupScreen = ({ navigation }) => {
  let signupError;
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [petName, setPetName] = useState('');
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  function handleSignup(userEmail, userPassword, userFirstName, userLastName, userPetName) {
    const db = getDatabase();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(userCredential => {
        const user = userCredential.user;
        set(ref(db, `users/${userCredential.user.uid}`), {
          firstName: userFirstName,
          lastName: userLastName,
          email: userEmail,
          petName: userPetName
        })

        dispatch(firstNameReducer(userFirstName))
        dispatch(petNameReducer(userPetName))

        console.log("Signup Successful!")
        Alert.alert('Welcome aboard!');   // notifies the user
        navigation.navigate('UserProfile')
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
        
          <Image style={styles.header} source={require('../assets/images/headers/signup-header-tp.png')}></Image>
          <Text style={styles.subHeader}>Please enter your details below</Text>
      
          <TextInput style={styles.input}
            placeholder="Email"
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
          />
          <TextInput style={styles.input}
            placeholder="Password"
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={passwordVisibility}
            rightIcon={rightIcon}
            value={password}
            onChangeText={setPassword}
            handlePasswordVisibility={handlePasswordVisibility}
          />
          <TextInput style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput style={styles.input}
            placeholder="Your new digipets name?"
            value={petName}
            onChangeText={text => setPetName(text)}
          />
          {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
          <TouchableOpacity style={styles.buttonStyle} onPress={() => {handleSignup(email, password, firstName, lastName, petName)}}>
            <Text style={styles.textStyle}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    resizeMode: 'contain',
    width: 280, 
    height: 20, 
    padding: 35,
    alignSelf: 'center',
    position: 'relative', top: 12,
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
    lineHeight: 41,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: '#280003',
    margin: 10,
    marginBottom: 1,
    fontFamily: 'IreneFlorentina'
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
    borderRadius: 10,
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
});

export default SignupScreen;

