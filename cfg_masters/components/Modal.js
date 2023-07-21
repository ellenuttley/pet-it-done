import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setDirtyNeedChosen, setHungryNeedChosen, setBoredNeedChosen } from '../redux/features/petNeeds/needsChosenSlice';
import HungryButton from '../components/hungryButton';
import DirtyButton from '../components/dirtyButton';
import BoredButton from '../components/boredButton';
import { useNavigation } from '@react-navigation/native';

const transparent = 'rgba(0,0,0,0.5)';

const ModalExample = ({ visible, onClose }) => {
    const navigation = useNavigation();
  const needsChosen = useSelector((state) => state.needsChosen);
  const dispatch = useDispatch();

  const renderButton = (type) => {
    if (!needsChosen[type]) {
      switch (type) {
        case 'dirty':
          return (
            <View style={styles.button}>
              <DirtyButton onPress={handleDirtyPress} />
            </View>
          );
          break;
        case 'hungry':
            return (
              <View style={styles.button}>
                <HungryButton onPress={handleHungryPress} />
              </View>
            );
            break;
          case 'bored':
              return (
                <View style={styles.button}>
                  <BoredButton onPress={handleBoredPress} />
                </View>
              );
              break;
        default:
          return null;
      }
    }
  }

  const handleDirtyPress = () => {
    dispatch(setDirtyNeedChosen(true));
    onClose();
    navigation.navigate('Pet');
  };

  const handleHungryPress = () => {
    dispatch(setHungryNeedChosen(true));
    onClose();
    navigation.navigate('Pet');
  };

  const handleBoredPress = () => {
    dispatch(setBoredNeedChosen(true));
    onClose();
    navigation.navigate('Pet');
  };

  return (
    <Modal visible={visible} animationType='fade' transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>


          <View style={styles.cardContainer}>
            <Image resizeMode="contain"
              style={{width: 270, height: 50, padding: 50, marginTop:-15}}
              source={require('../assets/images/headers/popup-header-tp.png')} />
          </View>

          <Text style={styles.modalText}>What do you choose?</Text>
          <View style={styles.buttonContainer2}>

            <Image
              style={styles.pawPrintImage}
              source={require('../assets/images/misc/modal-prints.png')}
              resizeMode="contain"
            />

            {renderButton('dirty')}
            {renderButton('hungry')}
            {renderButton('bored')}

          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: transparent,
  },
  modalContent: {
    backgroundColor: '#FAF2A3',
    padding: 15,
    width: '90%',
    borderRadius: 10,
    height: 250,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeText: {
    color: '#280003',
    fontSize: 16,
    fontFamily: 'IreneFlorentina',
  },
  modalText: {
    color: '#280003',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'IreneFlorentina',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 90,
  },
  buttonImage: {
    width: 100,
    height: 100,
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -5,
    backgroundColor: '#B0E3ED',
    padding: 40,
    borderRadius: 10,
    width: '100%',
    height: '60%',
  },
  button:{
    flex: 1, 
    marginHorizontal: -25,
    marginTop: 70,
  },
  cardContainer:{
      flex: 1,
      justifyContent: 'center',
      borderRadius: 20,
      alignItems: 'center',
  },
  pawPrintImage: {
    width: '120%',
    height: '120%',
    position: 'absolute',
    marginTop: 50,
    marginHorizontal: 10,
  },
};

export default ModalExample;
