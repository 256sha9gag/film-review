import React from "react";
import { useSelector } from "react-redux";
import styles from "./movieList.module.css";

import { MovieCard } from "shared/ui";
import { RootState } from "store/index";
import { Movie } from "store/slice/movieSlice";

export const MovieList: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const loading = useSelector((state: RootState) => state.movies.loading);

  if (!movies) {
    return (
      <div className={styles.tip}>Поиск по неофициальному api кинопоиска</div>
    );
  }

  if (loading) {
    return <div className={styles.tip}>Загрузка</div>;
  }

  if (movies.length === 0) {
    return (
      <div className={styles.tip}>По вашему запросу ничего не найдено</div>
    );
  }

  return (
    <>
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} value={movie} />
      ))}
    </>
  );
};
