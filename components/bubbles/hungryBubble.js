import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const HungryBubble = () => {
    return (
        <Image
          source={require('../../assets/images/pet_graphics/hungry-bubble.png')}
          style={{resizeMode: 'contain', width: 100, alignSelf: 'center', position: 'absolute', bottom: 257, }}/>
    )
}

export default HungryBubble;