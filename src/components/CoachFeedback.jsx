'use client';
import { useSelector } from 'react-redux';
import styles from '../styles/CoachFeedback.module.css';

export default function CoachFeedback() {
  const { strength, feedback } = useSelector((state) => state.password);

  return (
    <div className={styles.container} aria-live="polite">
      <h3 className={styles.strengthTitle}>
        חוזק סיסמה: {strength} / 4
      </h3>
      <ul className={styles.messageList}>
        {feedback.length > 0 ? (
          feedback.map((msg, index) => (
            <li key={index} className={styles.messageItem}>
              {msg}
            </li>
          ))
        ) : (
          <li className={styles.messageItem}>התחל להקליד כדי לקבל משוב...</li>
        )}
      </ul>
    </div>
  );
}
