import { createSlice } from '@reduxjs/toolkit';

const initialModalState = {
    modalState: 'registration'
};

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialModalState,
    reducers: {
      changeModalState(state, action) {
        state.modalState = action.payload;
      },
    },
  });

export const modalSliceActions = modalSlice.actions;

export default modalSlice;


