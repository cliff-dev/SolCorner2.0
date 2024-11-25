import { useMemo } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import authReducer from './slices/authSlice';

let store: ReturnType<typeof makeStore> | undefined;

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
  });

export const initializeStore = (preloadedState?: any) => {
  let _store = store ?? makeStore();

  if (preloadedState && store) {
    _store = makeStore();
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState?: any) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
