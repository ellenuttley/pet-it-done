import { Image, TouchableOpacity } from 'react-native';

export default function BoredButton(props)  {
    
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Image
                source={require('../assets/images/buttons/bored-button-tp.png')}
                style={{resizeMode: 'contain', width: 40, position: 'absolute', bottom: 0, right: 30,}}/>
        </TouchableOpacity>
    )
};