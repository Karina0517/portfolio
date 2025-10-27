import styles from './FloralBackground.module.css';

export const FloralBackground = () => {
  return (
    <div className={styles.floralBackground}>
      <div className={`${styles.flower} ${styles.flower1}`}>
        <div className={`${styles.flowerPetal} ${styles.pink1}`}></div>
      </div>
      <div className={`${styles.flower} ${styles.flower2}`}>
        <div className={`${styles.flowerPetal} ${styles.pink2}`}></div>
      </div>
      <div className={`${styles.flower} ${styles.flower3}`}>
        <div className={`${styles.flowerPetal} ${styles.pink3}`}></div>
      </div>
      <div className={`${styles.flower} ${styles.flower4}`}>
        <div className={`${styles.flowerPetal} ${styles.rose1}`}></div>
      </div>
      <div className={`${styles.flower} ${styles.flower5}`}>
        <div className={`${styles.flowerPetal} ${styles.rose2}`}></div>
      </div>
      <div className={`${styles.flower} ${styles.flower6}`}>
        <div className={`${styles.flowerPetal} ${styles.pink1}`}></div>
      </div>
      <div className={`${styles.flower} ${styles.flower7}`}>
        <div className={`${styles.flowerPetal} ${styles.pink3}`}></div>
      </div>
      <div className={`${styles.flower} ${styles.flower8}`}>
        <div className={`${styles.flowerPetal} ${styles.rose1}`}></div>
      </div>
    </div>
  );
};
