import React from "react";

import styles from "./reviewList.module.css";
import { MovieCard } from "shared/ui";
import { ReviewedMovies } from "store/slice/movieSlice";

interface ReviewListProps {
  sortedMovies: ReviewedMovies[];
}

export const ReviewList: React.FC<ReviewListProps> = ({ sortedMovies }) => {
  if (!sortedMovies.length) {
    return <div className={styles.tip}>Список пуст</div>;
  }

  return (
    <>
      {sortedMovies.map((movie: ReviewedMovies) => (
        <MovieCard key={movie.id} value={movie} reviewed={true} />
      ))}
    </>
  );
};
