import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HungryButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Image
                source={require('../assets/images/buttons/hungry-button-tp.png')}
                style={{resizeMode: 'contain', width: 70, alignSelf: 'center', position: 'absolute', bottom: 10, }}/>
        </TouchableOpacity>
    )
};