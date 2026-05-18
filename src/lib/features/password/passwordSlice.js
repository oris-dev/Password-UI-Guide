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
  activeKeys: {}, // Map of keys to highlight
};

const SYMBOLS = '!@#$%^&*()_+=-[]{}|;:\'",.<>?/'.split('');

const validatePassword = (password) => {
  let strength = 0;
  const feedback = [];
  const activeKeys = {};

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
    // Invite symbols
    SYMBOLS.slice(0, 10).forEach(s => activeKeys[s] = 'invite');
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
    // Mark sequence keys to avoid
    const lastChar = password.slice(-1).toLowerCase();
    const secondLastChar = password.slice(-2, -1).toLowerCase();
    
    const lastCode = lastChar.charCodeAt(0);
    const secondLastCode = secondLastChar.charCodeAt(0);
    
    // Predict next character in sequence to mark as 'avoid'
    let nextCode;
    if (lastCode === secondLastCode + 1) nextCode = lastCode + 1;
    if (lastCode === secondLastCode - 1) nextCode = lastCode - 1;
    
    if (nextCode) {
      const nextChar = String.fromCharCode(nextCode).toUpperCase();
      activeKeys[nextChar] = 'avoid';
    }
  } else if (password.length > 0) {
    strength += 1;
  }

  // Confirmation state for typed keys
  password.split('').forEach(char => {
    const upperChar = char.toUpperCase();
    activeKeys[upperChar] = 'confirmation';
  });

  // Final Strength adjustment: if Hebrew is present, strength is 0
  const finalStrength = hasHebrew ? 0 : Math.floor(strength);

  return { strength: finalStrength, feedback, activeKeys };
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPassword: (state, action) => {
      const newValue = action.payload;
      const { strength, feedback, activeKeys } = validatePassword(newValue);
      
      state.value = newValue;
      state.strength = strength;
      state.feedback = feedback;
      state.activeKeys = activeKeys;
    },
    resetStore: (state) => {
      return initialState;
    },
  },
});

export const { setPassword, resetStore } = passwordSlice.actions;

export default passwordSlice.reducer;
