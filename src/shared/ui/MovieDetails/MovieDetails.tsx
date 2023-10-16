import React, { useEffect } from "react";

import styles from "./movieDetails.module.css";
import { Movie, ReviewedMovies } from "store/slice/movieSlice";
import { useNavigate } from "react-router";

interface MovieDetailsProps {
  selectedMovie: Movie | ReviewedMovies | null;
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({
  selectedMovie,
}) => {
  const navigate = useNavigate();
  const cardStyle = {
    background: selectedMovie?.poster ? `url(${selectedMovie?.poster})` : "",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
  };

  useEffect(() => {
    if (!selectedMovie) {
      navigate("/");
    }
  }, [selectedMovie, navigate]);

  return (
    <section className={styles.wrapperInfo}>
      <div className={styles.image} style={cardStyle}>
        {!selectedMovie?.poster ? (
          <div className={styles.tip}>Image not avalible</div>
        ) : null}
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{selectedMovie?.name}</h2>
        <p className={styles.mainText}>
          <span className={styles.boldText}>Жанр: </span>
          {` ${selectedMovie?.genres[0]}`}
        </p>
        <p className={styles.mainText}>
          <span className={styles.boldText}>Длительность:</span>
          {selectedMovie?.movieLength
            ? ` ${selectedMovie?.movieLength} минут`
            : " Не указано"}
        </p>
        <p className={styles.mainText}>
          <span className={styles.boldText}>Рейтинг на Кинопоиске: </span>
          {` ${Number(selectedMovie?.rating).toFixed(2)}`}
        </p>
        <p className={styles.mainText}>{selectedMovie?.shortDescription}</p>
        <p className={styles.mainText}>{selectedMovie?.description}</p>
        {selectedMovie && "myRating" in selectedMovie && (
          <p className={styles.mainText}>
            <span className={styles.boldText}>Мой рейтинг: </span>
            {` ${selectedMovie?.myRating} из 5`}
          </p>
        )}
        {selectedMovie &&
          "comment" in selectedMovie &&
          selectedMovie?.comment !== "" && (
            <p className={styles.mainText}>
              <span className={styles.boldText}>Мой комментарий: </span>
              {` ${selectedMovie?.comment}`}
            </p>
          )}
      </div>
    </section>
  );
};
