'use client';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword } from '../lib/features/password/passwordSlice';
import { useState } from 'react';
import styles from '../styles/PasswordInput.module.css';

export default function PasswordInput({ onShowIdeas, confirmMode = false, confirmValue = '', onConfirmChange = () => {} }) {
  const dispatch = useDispatch();
  const password = useSelector((state) => state.password.value);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputStack}>
        <label htmlFor="password-input" className={styles.label}>
          הקלד סיסמה חדשה:
        </label>
        <div className={styles.inputGroup}>
          <input
            id="password-input"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            className={styles.input}
            placeholder="סיסמה חדשה..."
            autoComplete="new-password"
          />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.toggleButton}
          >
            {showPassword ? 'הסתר' : 'הצג'}
          </button>
          <button 
            type="button"
            onClick={onShowIdeas}
            className={styles.ideasButton}
            title="קבל רעיונות לסיסמה"
          >
            💡
          </button>
        </div>

        {confirmMode && (
          <>
            <label htmlFor="confirm-password-input" className={styles.label} style={{ marginTop: '15px' }}>
              אימות סיסמה:
            </label>
            <div className={styles.inputGroup}>
              <input
                id="confirm-password-input"
                type={showPassword ? 'text' : 'password'}
                value={confirmValue}
                onChange={(e) => onConfirmChange(e.target.value)}
                className={styles.input}
                placeholder="הקלד שוב את הסיסמה..."
                autoComplete="new-password"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
