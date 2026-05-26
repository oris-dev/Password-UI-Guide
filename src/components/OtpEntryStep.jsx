'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setOtpVerified, setError, setLoading } from '../lib/features/auth/authSlice';
import styles from '../styles/Home.module.css';

export default function OtpEntryStep() {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length < 4) return;

    dispatch(setLoading(true));
    
    // Simulate verification delay
    setTimeout(() => {
      // Mock OTP validation: 1234 is the magic code
      if (otp === '1234') {
        dispatch(setOtpVerified(true));
        dispatch(setStep('RESET_PASSWORD'));
      } else {
        dispatch(setError('קוד שגוי. נסה שוב (רמז: 1234)'));
        dispatch(setLoading(false));
      }
    }, 1000);
  };

  return (
    <div className={styles.stepContainer}>
      <h2>הזנת קוד אימות</h2>
      <p>הזן את הקוד בן 4 הספרות שקיבלת ב-SMS</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          maxLength={4}
          placeholder="- - - -"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
          className={styles.otpInput}
          dir="ltr"
          autoFocus
        />
        
        {error && <p className={styles.errorMessage}>{error}</p>}
        
        <div className={styles.buttonGroup}>
          <button 
            type="button"
            onClick={() => dispatch(setStep('PHONE_VERIFICATION'))} 
            className={styles.secondaryButton}
            disabled={isLoading}
          >
            חזור
          </button>
          <button 
            type="submit" 
            className={styles.button}
            disabled={isLoading || otp.length < 4}
          >
            {isLoading ? 'בודק...' : 'אמת קוד'}
          </button>
        </div>
      </form>
    </div>
  );
}
