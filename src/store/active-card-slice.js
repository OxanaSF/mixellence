import { createSlice } from '@reduxjs/toolkit';

const initialActiveCardState = { activeCard: false};

const activeCardSlice = createSlice({
  name: 'activeCard',
  initialState: initialActiveCardState,
  reducers: {
    toggleCard(state) {
      state.activeCard = !state.activeCard;
      console.log('state.activeCard: ', state.activeCard);
    },
   deactivate(state) {
      state.activeCard= false;
      console.log('state.activeCard ', state.activeCard);
    },
  },
});

export const activeCardActions = activeCardSlice.actions;
export default activeCardSlice.reducer;