import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  strength: 0,
  feedback: [],
  activeKeys: {}, // Map of keys to highlight
};

// Hebrew Messages from PASSWORD_RULES.md
const MESSAGES = {
  LENGTH: 'כדאי להוסיף עוד כמה תווים, זה יהפוך את הסיסמה לבטוחה הרבה יותר (לפחות 10).',
  CASE: 'שילוב של אותיות גדולות וקטנות מחזק את הסיסמה.',
  SYMBOL: 'הוספת סימן מיוחד (כמו @, #, או !) מוסיפה המון הגנה.',
  SEQUENCE: 'כדאי להימנע מרצפים פשוטים של מספרים כמו 123 - זה הופך את הסיסמה לקלה לניחוש.',
};

const SYMBOLS = '!@#$%^&*()_+=-[]{}|;:\'",.<>?/'.split('');

const validatePassword = (password) => {
  let strength = 0;
  const feedback = [];
  const activeKeys = {};

  if (!password) {
    return { strength: 0, feedback: [], activeKeys: {} };
  }

  // 1. Length Check
  if (password.length >= 10) {
    strength += 1;
  } else {
    feedback.push(MESSAGES.LENGTH);
  }

  // 2. Case Check
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  if (hasUpper && hasLower) {
    strength += 1;
  } else {
    feedback.push(MESSAGES.CASE);
  }

  // 3. Symbol Check
  const hasSymbol = SYMBOLS.some(s => password.includes(s));
  if (hasSymbol) {
    strength += 1;
  } else {
    feedback.push(MESSAGES.SYMBOL);
    // Invite symbols
    SYMBOLS.slice(0, 10).forEach(s => activeKeys[s] = 'invite');
  }

  // 4. Sequence Check
  const hasSequence = /123|234|345|456|567|678|789|012|abc|bcd|cde/.test(password.toLowerCase());
  if (!hasSequence && password.length > 0) {
    strength += 1;
  } else if (hasSequence) {
    feedback.push(MESSAGES.SEQUENCE);
    // Mark sequence keys to avoid
    const lastChar = password.slice(-1);
    const nextCharMap = { '1': '2', '2': '3', 'a': 'b', 'b': 'c' }; // Simplified for demo
    if (nextCharMap[lastChar]) {
      activeKeys[nextCharMap[lastChar]] = 'avoid';
    }
  }

  // Confirmation state for typed keys
  password.split('').forEach(char => {
    const upperChar = char.toUpperCase();
    activeKeys[upperChar] = 'confirmation';
  });

  return { strength, feedback, activeKeys };
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
