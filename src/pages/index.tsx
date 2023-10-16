import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import MyReviewPage from "./MyReviewPage/MyReviewPage";
import AddMoviePage from "./AddMoviePage/AddMoviePage";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import AddReviewPage from "./AddReviewPage/AddReviewPage";

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MyReviewPage />} />
      <Route path="/add-movie" element={<AddMoviePage />} />
      <Route path="/movie-details" element={<MovieDetailsPage />} />
      <Route path="/add-review" element={<AddReviewPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
