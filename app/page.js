'use client';
import { useState } from 'react';
import styles from '../src/styles/Home.module.css';
import PasswordInput from '../src/components/PasswordInput';
import CoachFeedback from '../src/components/CoachFeedback';
import KeyboardVisualizer from '../src/components/KeyboardVisualizer';
import PasswordIdeas from '../src/components/PasswordIdeas';

export default function Home() {
  const [showIdeas, setShowIdeas] = useState(false);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        מאמן סיסמאות
      </h1>
      
      <div className={styles.container}>
        <PasswordInput onShowIdeas={() => setShowIdeas(true)} />
        <div className={styles.splitSection}>
          <CoachFeedback />
        </div>
        <KeyboardVisualizer />
      </div>

      <PasswordIdeas 
        isOpen={showIdeas} 
        onClose={() => setShowIdeas(false)} 
      />
    </main>
  );
}
