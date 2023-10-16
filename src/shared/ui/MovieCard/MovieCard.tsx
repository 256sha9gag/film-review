import React from "react";

import styles from "./movieCard.module.css";
import {
  Movie,
  ReviewedMovies,
  setSelectedMovie,
  setSelectedReviewedMovie,
} from "store/slice/movieSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "store";

interface MovieCardProps {
  value: Movie | ReviewedMovies;
  reviewed?: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({ value, reviewed }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    if (reviewed) {
      dispatch(setSelectedReviewedMovie(value));
      navigate("/movie-details");
    } else {
      dispatch(setSelectedMovie(value));
      navigate("/add-review");
    }
  };

  const cardStyle = {
    background: value.poster ? `url(${value.poster})` : "",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div onClick={handleClick} className={styles.wrapper} style={cardStyle}>
      {!value.poster ? (
        <div className={styles.tip}>Image not avalible</div>
      ) : null}
      <div className={styles.nameWrapper}>
        {`${value.name} (${value.year})`}
        <div className={styles.details}>
          <span className={styles.detailsBold}>Жанр: </span>
          {`${value.genres[0]}`}
        </div>
        <div className={styles.details}>
          <span className={styles.detailsBold}>Длительность: </span>
          {value.movieLength ? `${value.movieLength} минут` : "Не указано"}
        </div>
        <div className={styles.details}>
          <span className={styles.detailsBold}>Рейтинг: </span>
          {`${Number(value.rating).toFixed(2)}`}
        </div>
        {reviewed && "myRating" in value && (
          <div className={styles.details}>
            <span className={styles.detailsBold}>Моя оценка: </span>
            {`${value.myRating} из 5`}
          </div>
        )}
      </div>
    </div>
  );
};
