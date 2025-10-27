import React from 'react';
import styles from './ContactStyle.module.css';

interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'gradient';
}

export const Card: React.FC<CardProps> = ({ title, children, variant = 'default' }) => {
  const cardClass =
    variant === 'gradient'
      ? `${styles.card} ${styles.cardGradient}`
      : styles.card;

  return (
    <div className={cardClass}>
      <h3 className={styles.cardTitle}>{title}</h3>
      {children}
    </div>
  );
};
