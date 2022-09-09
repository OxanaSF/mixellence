import { createSlice } from '@reduxjs/toolkit';

const initialGameResultState = { gameResult: 'Initial' };

const gameResultSlice = createSlice({
  name: 'gameResult',
  initialState: initialGameResultState,
  reducers: {
    winnerStateUpdate(state, action) {
      state.gameResult = action.payload
    },
  },
});

export const gameResultActions = gameResultSlice.actions;
export default gameResultSlice.reducer;