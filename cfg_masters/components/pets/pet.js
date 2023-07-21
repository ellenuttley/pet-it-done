import { Image } from 'react-native';

export default function Pet(props)  {
    let imgSrc;
    if (props.happy) {
        imgSrc = require('../../assets/images/pet_graphics/happyPet-tp.png');
    }
    else {
        imgSrc = require('../../assets/images/pet_graphics/sadPet-tp.png');
    }

    return (
        <Image
            source={imgSrc}
            style={{resizeMode: 'contain', width: 200, position: 'absolute', bottom: -60}}/>
    )
}