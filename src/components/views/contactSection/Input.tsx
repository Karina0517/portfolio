import React from 'react';

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
  const baseClass = `w-full px-4 py-3 rounded-lg border ${
    error ? 'border-destructive' : 'border-border'
  } bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all`;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={6}
          className={`${baseClass} resize-none`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={baseClass}
          placeholder={placeholder}
        />
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};
