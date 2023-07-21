import { createSlice } from '@reduxjs/toolkit'

export const petNeedsSlice = createSlice({
    name: 'petNeeds',
    initialState: {
        dirty: {
            status: true,
            refreshTime: null,
        },
        hungry: {
            status: true,
            refreshTime: null,
        },
        bored: {
            status: true,
            refreshTime: null,
        },
    },
    reducers: {
        setDirtyStatus: (state, action) => {
            state.dirty.status = action.payload;
            if (action.payload == false) {
                state.dirty.refreshTime = Date.now() + (24000);
            }
        },
        setHungryStatus: (state, action) => {
            state.hungry.status = action.payload;
            if (action.payload == false) {
                state.hungry.refreshTime = Date.now() + (24000);
            }
        },
        setBoredStatus: (state, action) => {
            state.bored.status = action.payload;
            if (action.payload == false) {
                state.bored.refreshTime = Date.now() + (24000);
            }
        }
    }
});

export const { setDirtyStatus, setHungryStatus, setBoredStatus } = petNeedsSlice.actions;

export default petNeedsSlice.reducer;