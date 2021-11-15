import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './reducers/counterSlice';
import crudSlice from './reducers/crudSlice';

//MAIN STORE
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    crud: crudSlice,
  },
});
