import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { setTaskTitle, setTaskCompletion as setTaskCompletionState } from '../redux/features/tasks/tasksSlice';
import { TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, TextInput, Image, ImageBackground, View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { CheckBox } from 'react-native-elements';
import ModalExample from '../components/Modal';
import BackButton from '../components/backButton';


const TaskListScreen = ({ navigation }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(tasks);

  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const setTaskCompletion = (taskId, isCompleted) => {
    dispatch(setTaskCompletionState({id: taskId, completed: isCompleted}));
    setOpenModal(isCompleted);
  };

  const updateTask = (id, text) => {
    dispatch(setTaskTitle({id: id, text: text}));
    console.log(tasks);
  }

  const tasksList = tasks.map((item, index) => (
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={() => setTaskCompletion(item.id, !item.completed)}
      key={item.id}
    >
      <CheckBox
        checked={item.completed}
        onPress={() => setTaskCompletion(item.id, !item.completed)}
      />
      <TextInput style={styles.taskText}
        placeholder="Add a task"
        value={tasks[index].title}
        onChangeText={(text) => updateTask(item.id, text)}
      />
    </TouchableOpacity>
  ));

  return (
    <TouchableWithoutFeedback>
      <KeyboardAvoidingView style={styles.container}>
        <ImageBackground source={require('../assets/images/background_images/blue-background.png')} resizeMode="cover" style={styles.image}>
          <View style={styles.cardContainer}>
            <BackButton />
        
            <Image source={require('../assets/images/pet_graphics/petpage-yellow.png')} style={{resizeMode: 'contain', width: "60%", opacity: 0.7, padding: 15, alignSelf: 'center', position: 'absolute', top: 0}}></Image>

            <Image style={styles.header} source={require('../assets/images/headers/toDo-header-tp.png')}></Image>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => {navigation.navigate('Pet')}}>
              <Text style={styles.textStyle}>Check on your</Text>
              <Text style={styles.textStyle}>buddy</Text>
            </TouchableOpacity>
            { tasksList }
            <ModalExample visible={openModal} onClose={closeModal} />
          </View>


        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    
  },
  header: {
    resizeMode: 'contain',
    width: 250, 
    height: 10, 
    padding: 35,
    position: 'absolute', top: 75, 
    alignSelf: 'center',

  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: "#FEFAFA",
    borderRadius: 10,
    alignSelf: 'center',
    width: 250,
    position: 'relative', 
    alignSelf: 'center',
  },
  taskText: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    width: 200,
    color: '#280003',
    fontFamily: 'IreneFlorentina',
    alignSelf: 'center',
    elevation: 0
  },
  cardContainer:{
    flex: 1,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(176, 227, 240, 0.7)',
    alignItems: 'center', 
  },
  title: {
    fontSize: 40,
    elevation: 4,
    alignSelf: 'center',
    fontFamily: 'IreneFlorentina',
    color: '#280003',
    position: 'absolute', top: 50, 
  },
  buttonStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    backgroundColor: '#FAF2A3',
    position: 'relative', top: 268, 
    margin: 10,
  },
  textStyle: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'normal',
    color: '#280003',
    fontFamily: 'IreneFlorentina'
  },
});

export default TaskListScreen;