import {createSlice} from '@reduxjs/toolkit';

//INITIAL STATE OF STORE
const initialState = {
  crudString1: '',
  crudString2: '',
};

//REDUCER WITH ACTIONS
export const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    setCrudString1: (state, action) => {
      state.crudString1 = action.payload;
      console.log(action);
    },

    updateCrudString1: (state, action) => {
      state.crudString1 = action.payload;
    },

    deleteCrudString1: state => {
      state.crudString1 = '';
    },

    setCrudString2: (state, action) => {
      state.crudString2 = action.payload;
    },

    updateCrudString2: (state, action) => {
      state.crudString2 = action.payload;
    },
    deleteCrudString2: state => {
      state.crudString2 = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCrudString1,
  updateCrudString1,
  deleteCrudString1,
  setCrudString2,
  updateCrudString2,
  deleteCrudString2,
} = crudSlice.actions;

export default crudSlice.reducer;
