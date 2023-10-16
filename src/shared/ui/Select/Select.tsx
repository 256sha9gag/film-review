import React from "react";

import styles from "./select.module.css";

interface SelectProps {
  value: "date" | "rating" | "length";
  handleSortByChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  handleSortByChange,
  name,
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={handleSortByChange}
      className={styles.select}
    >
      <option value="date">Сортировка по дате добавления</option>
      <option value="rating">Сортировка по моим оценкам</option>
      <option value="length">Сортировка по длительности</option>
    </select>
  );
};
