import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from './slices/authSlice'; 

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });

type Store = ReturnType<typeof makeStore>;

export type AppStore = Store;
export type AppState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
