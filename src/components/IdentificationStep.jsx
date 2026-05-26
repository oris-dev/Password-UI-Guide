'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setUser, setError, setLoading } from '../lib/features/auth/authSlice';
import styles from '../styles/Home.module.css';

export default function IdentificationStep() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    dispatch(setLoading(true));
    try {
      const response = await fetch('/api/auth/ldap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, mode: 'search' }) 
      });

      const result = await response.json();

      if (response.ok && result.success) {
        dispatch(setUser(result.user));
        dispatch(setStep('PHONE_VERIFICATION'));
      } else {
        dispatch(setError(result.message || 'משתמש לא נמצא במערכת'));
      }
    } catch (err) {
      dispatch(setError('שגיאת תקשורת. נסה שוב מאוחר יותר.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className={styles.stepContainer}>
      <h2>זיהוי משתמש</h2>
      <p>אנא הזן את שם המשתמש שלך כדי להתחיל בתהליך איפוס הסיסמה</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="שם משתמש"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          dir="ltr"
          disabled={isLoading}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.button} disabled={isLoading || !username.trim()}>
          {isLoading ? 'מחפש...' : 'המשך'}
        </button>
      </form>
    </div>
  );
}
