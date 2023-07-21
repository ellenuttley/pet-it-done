import { createSlice } from '@reduxjs/toolkit';

const petSlice = createSlice({
  name: 'petName',
  initialState: {
    petName: null
  },
  reducers: {
    setPetName: (state, action) => {
      state.petName = action.payload;
    }
  }
});

export const { setPetName } = petSlice.actions;

export default petSlice.reducer;
