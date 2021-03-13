import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface ChatNavigationState {
  pointer: number;
  index: number;
}

const initialState: ChatNavigationState = {
  pointer: 1,
  index: 0,
};

export const chatNavigationSlice = createSlice({
  name: 'chat-navigation',
  initialState,
  reducers: {
    navigateForward: (state) => {
      state.pointer += 1;
      state.index += 1;
    },
  },
});

export const { navigateForward } = chatNavigationSlice.actions;

export const selectChatNavigation = (state: RootState) => state.chatNavigation;

export default chatNavigationSlice.reducer;
