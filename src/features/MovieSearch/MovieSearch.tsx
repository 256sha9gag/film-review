import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";

import styles from "./movieSearch.module.css";
import { Button, Input } from "shared/ui";
import { searchMovies } from "store/slice/movieSlice";
import { MovieList } from "enteties";

export const MovieSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(searchMovies(inputValue));
  };

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <Input
          value={inputValue}
          handleChange={handleChange}
          placeholder="Введите название фильма"
          type="search"
        />
        <Button title="Найти" type="submit" />
      </form>
      <div className={styles.list}>
        <MovieList />
      </div>
    </>
  );
};
