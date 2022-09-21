import { createSlice } from '@reduxjs/toolkit';

const initialEnableEditState = { enableEdit: false };

const enableEditSlice = createSlice({
  name: 'enableEdit',
  initialState: initialEnableEditState,
  reducers: {
    enable(state) {
      state.enableEdit = true;
      console.log('state.enableEdit: ', state.enableEdit);
    },
   disable(state) {
      state.enableEdit = false;
      console.log('state.enableEdit: ', state.enableEdit);
    },
  },
});

export const enableEditActions = enableEditSlice.actions;
export default enableEditSlice.reducer;