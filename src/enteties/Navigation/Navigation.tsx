import React from "react";

import styles from "./navigation.module.css";
import { NavigationItem } from "shared/ui";

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <NavigationItem title="Мои ревью" path="/" />
        <NavigationItem title="Добавить фильм" path="/add-movie" />
      </ul>
    </nav>
  );
};
