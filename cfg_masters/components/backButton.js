
import { Image,StyleSheet, TouchableOpacity } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';



export default function BackButton()  {
  const navigation = useNavigation();
return (
<TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.goBack()}>
<Image
source={require('../assets/images/buttons/back-button-tp.png')}
style={{resizeMode: 'contain', width: 40, }}/>
</TouchableOpacity>)
};

const styles = StyleSheet.create({
    buttonStyle: {
        position: 'absolute', top: 0, 
        left: 0,
        paddingVertical: 0,
        paddingHorizontal: 10,
        elevation: 3,

      },
});