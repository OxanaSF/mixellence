import { configureStore } from '@reduxjs/toolkit';


import enableDeleteReducer  from './enable-delete-slice'
import enableEditReducer  from './enable-edit-slice'
import enableAddReducer  from './enable-add-slice'
import alertMessageReducer  from './alert-message-slice'
import addDataModalReducer  from './add-data-modal-slice'
import bartendersReducer  from './bartenders-slice'
import activeCardReducer  from './active-card-slice'
import updateBtnToggleReducer  from './update-data-btn-toggle-slice'



const store = configureStore({
  reducer: {
  
    enableDelete: enableDeleteReducer, 
    enableEdit: enableEditReducer,
    enableAdd: enableAddReducer,
    alertMessage: alertMessageReducer,
    addDataModal: addDataModalReducer, 
    bartenders: bartendersReducer,
    activeCard: activeCardReducer, 
    updateBtnToggle: updateBtnToggleReducer, 
  },
});

export default store;