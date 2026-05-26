'use client';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setOtpSent, setError, setLoading } from '../lib/features/auth/authSlice';
import styles from '../styles/Home.module.css';

export default function PhoneVerificationStep() {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);

  if (!user) {
    dispatch(setStep('IDENTIFICATION'));
    return null;
  }

  // Mask the phone number: e.g., 050****820
  const maskPhone = (phone) => {
    if (!phone) return 'לא קיים מספר טלפון';
    const start = phone.slice(0, 3);
    const end = phone.slice(-3);
    return `${start}****${end}`;
  };

  const handleSendSms = async () => {
    dispatch(setLoading(true));
    try {
      // Simulate SMS sending delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would call an API that triggers the SMS gateway
      console.log(`[MOCK SMS] Sending OTP to ${user.telephoneNumber}`);
      
      dispatch(setOtpSent(true));
      dispatch(setStep('OTP_ENTRY'));
    } catch (err) {
      dispatch(setError('נכשלה שליחת ה-SMS. נסה שוב.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className={styles.stepContainer}>
      <h2>אימות טלפוני</h2>
      <p>שלום {user.cn},</p>
      <p>נשלח קוד אימות למספר הטלפון המעודכן במערכת:</p>
      <div className={styles.phoneDisplay} dir="ltr">
        {maskPhone(user.telephoneNumber)}
      </div>
      
      {error && <p className={styles.errorMessage}>{error}</p>}
      
      <div className={styles.buttonGroup}>
        <button 
          onClick={() => dispatch(setStep('IDENTIFICATION'))} 
          className={styles.secondaryButton}
          disabled={isLoading}
        >
          חזור
        </button>
        <button 
          onClick={handleSendSms} 
          className={styles.button}
          disabled={isLoading}
        >
          {isLoading ? 'שולח...' : 'שלח קוד אימות'}
        </button>
      </div>
    </div>
  );
}
