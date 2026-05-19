import { createSlice } from '@reduxjs/toolkit';

// Hebrew Messages for Rule Elimination
const MESSAGES = {
  LENGTH: 'הוסיפו עוד כמה תווים (לפחות 10)',
  UPPER: 'שלבו אות גדולה (A-Z)',
  LOWER: 'שלבו אות קטנה (a-z)',
  SYMBOL: 'הוסיפו סימן מיוחד (כמו @, #, או !)',
  SEQUENCE: 'הסירו רצפים פשוטים (כמו 123)',
  HEBREW: 'כתבו באותיות באנגלית בלבד',
};

const initialState = {
  value: '',
  strength: 0,
  feedback: [
    MESSAGES.LENGTH,
    MESSAGES.UPPER,
    MESSAGES.LOWER,
    MESSAGES.SYMBOL,
  ],
};

const SYMBOLS = '!@#$%^&*()_+=-[]{}|;:\'",.<>?/'.split('');

const validatePassword = (password) => {
  let strength = 0;
  const feedback = [];

  // 1. Hebrew Character Check (Critical Blocker)
  const hasHebrew = /[\u0590-\u05FF]/.test(password);
  if (hasHebrew) {
    feedback.push(MESSAGES.HEBREW);
  }

  // 2. Length Check
  if (password.length >= 10) {
    strength += 1;
  } else {
    feedback.push(MESSAGES.LENGTH);
  }

  // 3. Case Check (Split for Rule Elimination)
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  
  if (hasUpper) {
    strength += 0.5;
  } else {
    feedback.push(MESSAGES.UPPER);
  }

  if (hasLower) {
    strength += 0.5;
  } else {
    feedback.push(MESSAGES.LOWER);
  }

  // 4. Symbol Check
  const hasSymbol = SYMBOLS.some(s => password.includes(s));
  if (hasSymbol) {
    strength += 1;
  } else {
    feedback.push(MESSAGES.SYMBOL);
  }

  // 5. Sequence Check (Dynamic ASCII Delta Algorithm)
  const isSequence = (str) => {
    if (str.length < 3) return false;
    const lowerStr = str.toLowerCase();
    
    for (let i = 0; i <= lowerStr.length - 3; i++) {
      const char1 = lowerStr.charCodeAt(i);
      const char2 = lowerStr.charCodeAt(i + 1);
      const char3 = lowerStr.charCodeAt(i + 2);
      
      // Check for ascending (1, 2, 3) or descending (3, 2, 1) sequences
      if ((char2 === char1 + 1 && char3 === char2 + 1) || 
          (char2 === char1 - 1 && char3 === char2 - 1)) {
        return true;
      }
    }
    return false;
  };

  const hasSequence = isSequence(password);
  if (hasSequence) {
    feedback.push(MESSAGES.SEQUENCE);
  } else if (password.length > 0) {
    strength += 1;
  }

  // Final Strength adjustment: if Hebrew is present, strength is 0
  const finalStrength = hasHebrew ? 0 : Math.floor(strength);

  return { strength: finalStrength, feedback };
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPassword: (state, action) => {
      const newValue = action.payload;
      const { strength, feedback } = validatePassword(newValue);
      
      state.value = newValue;
      state.strength = strength;
      state.feedback = feedback;
    },
    resetStore: (state) => {
      return initialState;
    },
  },
});

export const { setPassword, resetStore } = passwordSlice.actions;

export default passwordSlice.reducer;
