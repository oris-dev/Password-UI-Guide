import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 'IDENTIFICATION', // IDENTIFICATION, PHONE_VERIFICATION, OTP_ENTRY, RESET_PASSWORD
  user: null, // { uid, cn, telephoneNumber, mail, dn }
  otpSent: false,
  otpVerified: false,
  error: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload;
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    setOtpSent: (state, action) => {
      state.otpSent = action.payload;
    },
    setOtpVerified: (state, action) => {
      state.otpVerified = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    resetAuth: (state) => {
      return initialState;
    },
  },
});

export const { 
  setStep, 
  setUser, 
  setOtpSent, 
  setOtpVerified, 
  setError, 
  setLoading, 
  resetAuth 
} = authSlice.actions;

export default authSlice.reducer;
