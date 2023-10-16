import React, { useState, useEffect } from "react";

import styles from "./reviewPanel.module.css";
import { ReviewedMovies } from "store/slice/movieSlice";
import { ReviewList } from "enteties";
import { FilterInput, Select } from "shared/ui";
import filterMovies from "features/Utils/filterMovies";
import sortMovies from "features/Utils/sortMovies";

export const ReviewPanel: React.FC = () => {
  const [movies, setMovies] = useState<ReviewedMovies[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [lengthFilter, setLengthFilter] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"date" | "rating" | "length">("date");

  const fetchMovies = () => {
    const storedMovies = localStorage.getItem("reviewedMovies");
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRatingFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const rating = Number(event.target.value);
    setRatingFilter(rating || null);
  };

  const handleLengthFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const length = Number(event.target.value);
    setLengthFilter(length || null);
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as "date" | "rating" | "length");
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const filteredMovies = filterMovies(movies, ratingFilter, lengthFilter, searchTerm);

  const sortedMovies = sortMovies(filteredMovies, sortBy);

  return (
    <>
      <div className={styles.div}>
        <FilterInput
          type="text"
          value={searchTerm}
          handleSearchChange={handleSearchChange}
          placeholder="Поиск по названию"
          name="SearchByName"
        />
        <FilterInput
          type="number"
          value={ratingFilter || ""}
          handleSearchChange={handleRatingFilterChange}
          placeholder="Фильтр по рейтингу"
          name="FilterMyRating"
        />
        <FilterInput
          type="number"
          value={lengthFilter || ""}
          handleSearchChange={handleLengthFilterChange}
          placeholder="Фильтр по длительности"
          name="FilterByLength"
        />
        <Select
          name="SelectedSortBy"
          value={sortBy}
          handleSortByChange={handleSortByChange}
        />
      </div>
      <div className={styles.list}>
        <ReviewList sortedMovies={sortedMovies} />
      </div>
    </>
  );
};
