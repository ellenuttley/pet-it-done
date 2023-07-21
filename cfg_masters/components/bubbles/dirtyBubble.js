import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const DirtyBubble = () => {
  return (
      <Image
        source={require('../../assets/images/pet_graphics/dirty-thought-tp.png')}
        style={{resizeMode: 'contain', width: 100, position: 'absolute', bottom: 210, left: 60,}}/>
  );
};

export default DirtyBubble;