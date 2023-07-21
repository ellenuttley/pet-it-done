import { configureStore } from '@reduxjs/toolkit';
import petNeedsReducer from './features/petNeeds/petNeedsSlice';
import needsChosenReducer from './features/petNeeds/needsChosenSlice';
import setFirstName from './features/userDetails/firstNameSlice';
import setPetName from './features/userDetails/petNameSlice';
import tasksReducer from './features/tasks/tasksSlice';


export default configureStore({
  reducer: {
    petNeeds: petNeedsReducer,
    needsChosen: needsChosenReducer,
    petName: setPetName,
    firstName: setFirstName,
    tasks: tasksReducer
  },
})