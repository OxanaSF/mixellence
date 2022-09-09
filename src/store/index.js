import { configureStore } from '@reduxjs/toolkit';

import gameResultReducer from './placeholder-slice';

const store = configureStore({
  reducer: {
    gameResult: gameResultReducer,
  },
});

export default store;
