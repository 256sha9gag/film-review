import React from "react";

import styles from "./filterInput.module.css";

interface FilterInputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  value: string | number;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const FilterInput: React.FC<FilterInputProps> = ({
  placeholder,
  type,
  value,
  handleSearchChange,
  name,
}) => {
  return (
    <>
      <input
        value={value}
        onChange={(e) => handleSearchChange(e)}
        className={styles.filterInput}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
};
