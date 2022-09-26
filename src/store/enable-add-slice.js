import { createSlice } from '@reduxjs/toolkit';

const initialEnableAddState = { enableAdd: false };

const enableAddSlice = createSlice({
  name: 'enableAdd',
  initialState: initialEnableAddState,
  reducers: {
    enable(state) {
      state.enableAdd = true;
      console.log('state.enableAdd: ', state.enableAdd);
    },
   disable(state) {
      state.enableAdd = false;
      console.log('state.enableAdd: ', state.enableAdd);
    },
  },
});

export const enableAddActions = enableAddSlice.actions;
export default enableAddSlice.reducer;