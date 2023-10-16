import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

import styles from "./reviewDetails.module.css";
import { MovieDetails } from "shared/ui";

export const ReviewDetails: React.FC = () => {
  const selectedReview = useSelector(
    (state: RootState) => state.movies.selectedReview,
  );

  return (
    <div className={styles.wrapper}>
      <MovieDetails selectedMovie={selectedReview} />
    </div>
  );
};
