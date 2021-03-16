import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import chatNavigationReducer from './features/chat-navigation';
import modalReducer from './features/modal';

export const store = configureStore({
  reducer: {
    chatNavigation: chatNavigationReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
