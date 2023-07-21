import { Image } from 'react-native';

export default function HappyPet()  {
    return (
        <Image
        source={require('../../assets/images/pet_graphics/sadPet-tp.png')}
        style={{resizeMode: 'contain', width: 200, position: 'absolute', bottom: -60}}/>

    )
}