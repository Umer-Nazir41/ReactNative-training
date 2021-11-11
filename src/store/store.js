import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './reducer/counterSlice';
import localizationSlice from './reducer/localizationSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    lang: localizationSlice,
  },
});
