import { configureStore } from '@reduxjs/toolkit';


import enableDeleteReducer  from './enable-delete-slice'
import enableEditReducer  from './enable-edit-slice'
import alertMessageReducer  from './alert-message-slice'

const store = configureStore({
  reducer: {
  
    enableDelete: enableDeleteReducer, 
    enableEdit: enableEditReducer,
    alertMessage: alertMessageReducer
  },
});

export default store;