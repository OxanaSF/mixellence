import { createSlice } from '@reduxjs/toolkit';

const initialAddDataModalState = {
  addDataModal: false,
  returnLink: '',
};

const addDataModalSlice = createSlice({
  name: 'addDataModal',
  initialState: initialAddDataModalState,
  reducers: {
    open(state) {
      state.addDataModal = true;
      console.log('state.addDataModal: ', state.addDataModal);
    },
    close(state) {
      state.addDataModal = false;
      console.log('state.addDataModal: ', state.addDataModal);
    },
    updateReturnLink(state, action) {
      state.returnLink = action.payload;
    },
  },
});

export const addDataModalActions = addDataModalSlice.actions;
export default addDataModalSlice.reducer;
