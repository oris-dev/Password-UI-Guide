'use client';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword } from '../lib/features/password/passwordSlice';
import { useState } from 'react';
import styles from '../styles/PasswordInput.module.css';

export default function PasswordInput() {
  const dispatch = useDispatch();
  const password = useSelector((state) => state.password.value);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.wrapper}>
      <label htmlFor="password-input" className={styles.label}>
        הקלד סיסמה:
      </label>
      <div className={styles.inputGroup}>
        <input
          id="password-input"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          className={styles.input}
          placeholder="סיסמה חדשה..."
        />
        <button 
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={styles.toggleButton}
        >
          {showPassword ? 'הסתר' : 'הצג'}
        </button>
      </div>
    </div>
  );
}
