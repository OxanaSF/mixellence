import { createSlice } from '@reduxjs/toolkit';

const initialActivateServicesDashboardState = { activateServicesDashboard: false };

const activateServicesDashboardSlice = createSlice({
  name: 'activateServicesDashboard',
  initialState: initialActivateServicesDashboardState,
  reducers: {
    activate(state) {
      state.activateServicesDashboard = true;
      console.log('activateServicesDashboard: ', state.activateServicesDashboard);
    },
    deactivate(state) {
      state.activateServicesDashboard = false;
      console.log('activateServicesDashboard: ', state.activateServicesDashboard);
    },

  },
});

export const activateServicesDashboardActions = activateServicesDashboardSlice.actions;
export default activateServicesDashboardSlice.reducer;