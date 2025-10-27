import React from 'react';
import styles from './ContactStyle.module.css';

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  value,
  placeholder,
  error,
  onChange,
  textarea = false,
}) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={6}
          className={`${styles.input} ${error ? styles.error : ''}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`${styles.input} ${error ? styles.error : ''}`}
          placeholder={placeholder}
        />
      )}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};
