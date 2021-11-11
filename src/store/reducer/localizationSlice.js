import {createSlice} from '@reduxjs/toolkit';

//INITIAL STATE OF STORE
const initialState = {
  language: 'en',
};

//REDUCER WITH ACTIONS
export const localizationSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action) => {
      language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLang} = localizationSlice.actions;

export default localizationSlice.reducer;
