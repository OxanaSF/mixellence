import { createSlice } from '@reduxjs/toolkit';

const initialBartendersState = { bartenders: [] };

const bartendersSlice = createSlice({
  name: 'bartenders',
  initialState: initialBartendersState ,
  reducers: {
   setBartenders(state, action) {
      state.bartenders = action.payload
    },
  },
});

export const bartendersActions = bartendersSlice.actions;
export default bartendersSlice.reducer;