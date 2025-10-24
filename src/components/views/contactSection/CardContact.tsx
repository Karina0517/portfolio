import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'gradient';
}

export const Card: React.FC<CardProps> = ({ title, children, variant = 'default' }) => {
  const baseStyles =
    'p-6 rounded-2xl border shadow-card transition-all duration-300';
  const variants = {
    default: `${baseStyles} bg-card border-border`,
    gradient: `${baseStyles} bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20`,
  };

  return (
    <div className={variants[variant]}>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      {children}
    </div>
  );
};
