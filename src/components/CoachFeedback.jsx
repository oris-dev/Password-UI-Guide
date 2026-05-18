'use client';
import { useSelector } from 'react-redux';
import styles from '../styles/CoachFeedback.module.css';

export default function CoachFeedback() {
  const { value, strength, feedback } = useSelector((state) => state.password);

  const strengthClass = styles[`strength_${strength}`];
  const strengthText = [
    'חלשה מאוד',
    'חלשה',
    'בינונית',
    'טובה',
    'חזקה מאוד'
  ][strength];

  const renderFeedbackContent = () => {
    if (feedback.length > 0) {
      return feedback.map((msg, index) => (
        <li key={index} className={styles.messageItem}>
          {msg}
        </li>
      ));
    }

    if (value.length > 0 && strength === 4) {
      return <li className={styles.messageItem} style={{ color: 'var(--strength-4)', fontWeight: 'bold' }}>כל הכבוד! הסיסמה שלך חזקה ובטוחה.</li>;
    }

    return null;
  };

  return (
    <div className={`${styles.container} ${strengthClass}`} aria-live="polite">
      <h3 className={styles.strengthTitle}>
        חוזק סיסמה: {strengthText}
      </h3>
      <ul className={styles.messageList}>
        {renderFeedbackContent()}
      </ul>
    </div>
  );
}
