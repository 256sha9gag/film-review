import React from "react";

import styles from "./button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  type: "button" | "submit" | "reset";
}

export const Button = ({ title, type }: ButtonProps) => {
  return (
    <button type={type} className={styles.button}>
      {title}
    </button>
  );
};
