import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { appReducer } from './root-reducer';

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
