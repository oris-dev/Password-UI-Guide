'use client';
import { useSelector } from 'react-redux';
import styles from '../styles/KeyboardVisualizer.module.css';

export default function KeyboardVisualizer() {
  const activeKeys = useSelector((state) => state.password.activeKeys);
  
  // Simplified layout for demonstration
  const rows = [
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']
  ];

  const getKeyStyle = (key) => {
    const state = activeKeys[key];
    if (state === 'invite') return `${styles.key} ${styles.invite}`;
    if (state === 'confirmation') return `${styles.key} ${styles.confirmation}`;
    if (state === 'avoid') return `${styles.key} ${styles.avoid}`;
    return styles.key;
  };

  return (
    <div className={styles.keyboard}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((key) => (
            <div key={key} className={getKeyStyle(key)}>
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
