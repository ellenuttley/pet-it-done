import { createSlice } from '@reduxjs/toolkit';

const firstNameSlice = createSlice({
  name: 'firstName',
  initialState: {
    firstName: null
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    }
  }
});

export const { setFirstName } = firstNameSlice.actions;

export default firstNameSlice.reducer;
