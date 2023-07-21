import { Image,StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DirtyButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Image
                source={require('../assets/images/buttons/dirty-button-tp.png')}
                style={{resizeMode: 'contain', width: 40, position: 'absolute', bottom: 5, left: 30,}}/>
        </TouchableOpacity>
    )
};