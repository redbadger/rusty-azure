import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: true,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpen = false;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
