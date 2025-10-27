import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  variant?: "primary" | "primary_1" | "secondary" | "danger" | "info";
  text?: string;
  disabled?: boolean;
  click?: () => void;
  className?: string;
}

export const MiButton = ({
  variant = "primary",
  text,
  disabled = false,
  click,
  className = "",
}: ButtonProps) => {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button
      onClick={click}
      disabled={disabled}
      className={`${styles.base} ${variantClass} ${
        disabled ? styles.disabled : ""
      } ${className}`}
    >
      {text}
    </button>
  );
};