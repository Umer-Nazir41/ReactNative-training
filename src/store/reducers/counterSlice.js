import {createSlice} from '@reduxjs/toolkit';

//INITIAL STATE OF STORE VARIABLE
const initialState = {
  value: 0,
};

//REDUCER AND ACTION FOR COUNTER
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
