import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import conversation from '../../../data/script';

interface ChatNavigationState {
  index: number;
}

const initialState: ChatNavigationState = {
  index: 0,
};

export const chatNavigationSlice = createSlice({
  name: 'chat-navigation',
  initialState,
  reducers: {
    navigateForward: (state) => {
      state.index =
        state.index < conversation.length ? (state.index += 1) : state.index;
    },
    navigateBackward: (state) => {
      state.index = state.index > 0 ? (state.index -= 1) : 0;
    },
  },
});

export const {
  navigateForward,
  navigateBackward,
} = chatNavigationSlice.actions;

export const selectChatNavigation = (state: RootState) => state.chatNavigation;

export default chatNavigationSlice.reducer;
