import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: [],
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
    },
    login: (state, action) => {
      const auth = state.user.filter(obj => {
        obj.username === action.payload.email;
        obj.password === action.payload.password;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
