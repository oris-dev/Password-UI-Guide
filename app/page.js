'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../src/styles/Home.module.css';
import PasswordInput from '../src/components/PasswordInput';
import CoachFeedback from '../src/components/CoachFeedback';
import KeyboardVisualizer from '../src/components/KeyboardVisualizer';
import PasswordIdeas from '../src/components/PasswordIdeas';

// New Steps
import IdentificationStep from '../src/components/IdentificationStep';
import PhoneVerificationStep from '../src/components/PhoneVerificationStep';
import OtpEntryStep from '../src/components/OtpEntryStep';

export default function Home() {
  const [showIdeas, setShowIdeas] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const { currentStep, user } = useSelector((state) => state.auth);
  const { strength, value: passwordValue } = useSelector((state) => state.password);

  const passwordsMatch = passwordValue && passwordValue === confirmPassword;
  const canReset = strength >= 3 && passwordsMatch;

  const renderStep = () => {
    switch (currentStep) {
      case 'IDENTIFICATION':
        return <IdentificationStep />;
      case 'PHONE_VERIFICATION':
        return <PhoneVerificationStep />;
      case 'OTP_ENTRY':
        return <OtpEntryStep />;
      case 'RESET_PASSWORD':
        return (
          <>
            <div className={styles.welcomeUser}>
              שלום <strong>{user?.cn}</strong>, בחר סיסמה חדשה וחזקה:
            </div>
            
            <PasswordInput 
              onShowIdeas={() => setShowIdeas(true)} 
              confirmMode={true}
              confirmValue={confirmPassword}
              onConfirmChange={setConfirmPassword}
            />

            {!passwordsMatch && confirmPassword && (
              <p className={styles.errorMessage} style={{ textAlign: 'center', marginTop: '10px' }}>
                הסיסמאות אינן תואמות
              </p>
            )}

            <div className={styles.splitSection}>
              <CoachFeedback />
            </div>
            
            <KeyboardVisualizer />
            
            <button 
              className={styles.button} 
              disabled={!canReset}
              style={{ marginTop: '20px', width: '100%' }}
              onClick={() => alert('הסיסמה שונתה בהצלחה!')}
            >
              עדכן סיסמה
            </button>
          </>
        );
      default:
        return <IdentificationStep />;
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        מאמן סיסמאות
      </h1>
      
      <div className={styles.container}>
        {renderStep()}
      </div>

      <PasswordIdeas 
        isOpen={showIdeas} 
        onClose={() => setShowIdeas(false)} 
      />
    </main>
  );
}
