import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store";
import { RootState } from "store";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router";

import styles from "./movieAddReview.module.css";
import { Button, MovieDetails, Textarea } from "shared/ui";
import { addReviewedMovie } from "store/slice/movieSlice";

export const MovieAddReview: React.FC = () => {
  const navigate = useNavigate();
  let selectedMovie = useSelector(
    (state: RootState) => state.movies.selectedMovie,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (!selectedMovie) {
      navigate("/add-movie");
    }
  }, [selectedMovie, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(true);
    const movie = {
      ...selectedMovie,
      comment,
      myRating: rating,
      dateAdding: new Date().toString(),
    };
    dispatch(addReviewedMovie(movie));
    const data = localStorage.getItem("reviewedMovies");
    const parsedData = data !== null ? JSON.parse(data) : [];
    if (
      parsedData.length !== 0 &&
      parsedData.some((item: any) => item.id === movie.id)
    ) {
      setIsValid(false);
      return;
    }
    localStorage.setItem(
      "reviewedMovies",
      JSON.stringify([...parsedData, movie]),
    );
    setIsValid(false);
    setComment("");
    setRating(0);
    navigate("/");
  };

  const handleRatingChange = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.currentTarget.value);
  };

  return (
    <div className={styles.wrapper}>
      <MovieDetails selectedMovie={selectedMovie} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Оцените фильм:</h2>
        <Rating onClick={handleRatingChange} />
        <Textarea
          placeholder="Оставьте комментарий"
          handleCommentChange={handleCommentChange}
          comment={comment}
        />
        <div className={styles.wrapperButton}>
          <Button type="submit" title={"Добавить"} />
        </div>
        {isValid ? null : (
          <div className={styles.danger}>Вы уже добавляли оценку фильму</div>
        )}
      </form>
    </div>
  );
};
