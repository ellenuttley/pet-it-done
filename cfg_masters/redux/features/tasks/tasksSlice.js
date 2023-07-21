import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        { id: 1, title: '', completed: false },
        { id: 2, title: '', completed: false },
        { id: 3, title: '', completed: false },
    ],
    reducers: {
        setTaskTitle: (state, action) => (
            state.map((task) => {
                if (task.id == action.payload.id) {
                    return { ...task, title: action.payload.text}
                }
                else {
                    return { ...task }
                }
            })
        ),
        setTaskCompletion: (state, action) => {
            // console.log(payload)
            return state.map((task) => {
                if (task.id == action.payload.id) {
                    return { ...task, completed: action.payload.completed}
                }
                else {
                    return { ...task }
                }
            })
        }
    }
});

export const { setTaskTitle, setTaskCompletion } = tasksSlice.actions;

export default tasksSlice.reducer;