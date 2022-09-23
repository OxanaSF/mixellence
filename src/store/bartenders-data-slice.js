import { createSlice } from '@reduxjs/toolkit';

const initialBartendersDataState = {
  bartendersData: {
    name: '',
    drink: '',
    city: '',
    quote: '',
    img: '',
  },
};

const bartendersDataSlice = createSlice({
  name: 'bartendersData',
  initialState: initialBartendersDataState,
  reducers: {
    bartendersDataUpdate(state, action) {
      state.bartendersData = action.payload;
    },
  },
});

export const bartendersDataActions = bartendersDataSlice.actions;
export default bartendersDataSlice.reducer;
