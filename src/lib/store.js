import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from './features/password/passwordSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      password: passwordReducer,
    },
  });
};
