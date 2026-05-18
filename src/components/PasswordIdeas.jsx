import styles from './PasswordIdeas.module.css';

export default function PasswordIdeas({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h3 className={styles.title}>רעיונות ליצירת סיסמה חזקה</h3>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>שם פרטי</li>
            <li>שם משפחה</li>
            <li>תאריכים חשובים</li>
            <li>אנשים חשובים</li>
            <li>מאכל אהוב</li>
            <li>חיה אהובה \ שם של חיה</li>
            <li>בדיחה מוכרת</li>
            <li>תעודות זהות \ טלפון</li>
          </ul>
        </div>
        <div className={styles.footer}>
          <button className={styles.primaryButton} onClick={onClose}>הבנתי, תודה!</button>
        </div>
      </div>
    </div>
  );
}

