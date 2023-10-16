import React from "react";

import styles from "./addMoviePage.module.css";
import { MovieSearch } from "features";

const AddMoviePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <MovieSearch />
    </main>
  );
};

export default AddMoviePage;
