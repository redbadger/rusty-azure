import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import chatNavigationReducer from './features/chat-navigation';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chatNavigation: chatNavigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
