import React from "react";

import styles from "./header.module.css";
import { Logo, Navigation } from "enteties";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
};
