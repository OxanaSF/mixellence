import { createSlice } from '@reduxjs/toolkit';

const initialEnableDeleteState = { enableDelete: false };

const enableDeleteSlice = createSlice({
  name: 'enableDelete',
  initialState: initialEnableDeleteState,
  reducers: {
    enable(state) {
      state.enableDelete= true;
      console.log('state.enableDelete: ', state.enableDelete);
    },
   disable(state) {
      state.enableDelete = false;
      console.log('state.enableDelete: ', state.enableDelete);
    },
  },
});

export const enableDeleteActions = enableDeleteSlice.actions;
export default enableDeleteSlice.reducer;