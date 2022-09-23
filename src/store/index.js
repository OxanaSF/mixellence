import { configureStore } from '@reduxjs/toolkit';


import enableDeleteReducer  from './enable-delete-slice'
import enableEditReducer  from './enable-edit-slice'
import alertMessageReducer  from './alert-message-slice'
import addDataModalReducer  from './add-data-modal-slice'
import bartendersDataReducer  from './bartenders-data-slice'


const store = configureStore({
  reducer: {
  
    enableDelete: enableDeleteReducer, 
    enableEdit: enableEditReducer,
    alertMessage: alertMessageReducer,
    addDataModal: addDataModalReducer, 
    bartendersData: bartendersDataReducer 
  },
});

export default store;