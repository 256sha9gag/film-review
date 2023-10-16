import React from "react";

import styles from "./input.module.css";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  value: string;
  handleChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  value,
  handleChange,
}) => {
  return (
    <>
      <label></label>
      <input
        value={value}
        onChange={handleChange}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        required
      />
    </>
  );
};
