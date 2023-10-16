import React from "react";

import styles from "./logo.module.css";

export const Logo: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>FilmReview</h1>
    </div>
  );
};
