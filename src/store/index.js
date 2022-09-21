import { configureStore } from '@reduxjs/toolkit';


import enableDeleteReducer  from './enable-delete-slice'
import enableEditReducer  from './enable-edit-slice'

const store = configureStore({
  reducer: {
  
    enableDelete: enableDeleteReducer, 
    enableEdit: enableEditReducer 
  },
});

export default store;