import { createSlice } from '@reduxjs/toolkit';

const initialUpdateBtnToggleState = { updateBtnToggle: false };

const updateBtnToggleSlice = createSlice({
  name: 'updateBtnToggle',
  initialState: initialUpdateBtnToggleState ,
  reducers: {
    updateBtnToggle(state) {
      state.updateBtnToggle = !state.updateBtnToggle;
      console.log('updateBtnToggle: ', state.updateBtnToggle);
    },
  },
});

export const updateBtnToggleActions = updateBtnToggleSlice.actions;
export default updateBtnToggleSlice.reducer;