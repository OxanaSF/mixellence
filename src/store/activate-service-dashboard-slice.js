import { createSlice } from '@reduxjs/toolkit';

const initialActivateServicesDashboardState = { activateServicesDashboard: false };

const activateServicesDashboardSlice = createSlice({
  name: 'activateServicesDashboard',
  initialState: initialActivateServicesDashboardState,
  reducers: {
    activate(state) {
      state.activateServicesDashboard = !state.activateServicesDashboard;
      console.log('activateServicesDashboard: ', state.activateServicesDashboard);
    },
  },
});

export const activateServicesDashboardActions = activateServicesDashboardSlice.actions;
export default activateServicesDashboardSlice.reducer;