import styles from '../src/styles/Home.module.css';
import PasswordInput from '../src/components/PasswordInput';
import CoachFeedback from '../src/components/CoachFeedback';
import KeyboardVisualizer from '../src/components/KeyboardVisualizer';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        מאמן סיסמאות
      </h1>
      
      <div className={styles.container}>
        <PasswordInput />
        <CoachFeedback />
        <KeyboardVisualizer />
      </div>
    </main>
  );
}
