import { configureStore } from '@reduxjs/toolkit';


import enableDeleteReducer  from './enable-delete-slice'

const store = configureStore({
  reducer: {
  
    enableDelete: enableDeleteReducer 
  },
});

export default store;