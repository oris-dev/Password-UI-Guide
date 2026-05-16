import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  strength: 0,
  feedback: [],
  activeKeys: {}, // Map of keys to highlight (Neutral, Invite, Confirmation, Avoid)
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.value = action.payload;
      // Validation logic will be implemented here or in a separate utility
      // For now, just a placeholder for the setup
    },
    resetStore: (state) => {
      return initialState;
    },
  },
});

export const { setPassword, resetStore } = passwordSlice.actions;

export default passwordSlice.reducer;
