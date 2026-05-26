import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from './features/password/passwordSlice';
import authReducer from './features/auth/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      password: passwordReducer,
      auth: authReducer,
    },
  });
};
