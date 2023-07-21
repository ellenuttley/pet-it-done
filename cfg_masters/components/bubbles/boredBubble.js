import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const BoredBubble = () => {
    return (
        <Image
            source={require('../../assets/images/pet_graphics/bored-bubble.png')}
            style={{resizeMode: 'contain', width: 123, position: 'absolute', bottom: 200, right: 50,}}/>
    )
}

export default BoredBubble;