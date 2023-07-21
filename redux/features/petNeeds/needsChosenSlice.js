import { createSlice } from '@reduxjs/toolkit'

export const needsChosenSlice = createSlice({
    name: 'needsChosen',
    initialState: {
        dirty: false,
        hungry: false,
        bored: false,
    },
    reducers: {
        setDirtyNeedChosen: (state, action) => {
            state.dirty = action.payload
        },
        setHungryNeedChosen: (state, action) => {
            state.hungry = action.payload
        },
        setBoredNeedChosen: (state, action) => {
            state.bored = action.payload
        }
    }
});

export const { setDirtyNeedChosen, setHungryNeedChosen, setBoredNeedChosen } = needsChosenSlice.actions;

export default needsChosenSlice.reducer;