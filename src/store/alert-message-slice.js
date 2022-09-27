import { createSlice } from '@reduxjs/toolkit';

const initialAlertMessageState = { alertMessage: 'Initial' };

const alertMessageSlice = createSlice({
  name: 'alertMessage',
  initialState: initialAlertMessageState,
  reducers: {
   alertMessageUpdate(state, action) {
      state.alertMessage = action.payload
    },
  },
});

export const alertMessageActions = alertMessageSlice.actions;
export default alertMessageSlice.reducer;