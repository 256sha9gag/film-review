import { ReviewedMovies } from "store/slice/movieSlice";

type SortedMoviesFn = (
  filteredMovies: ReviewedMovies[],
  sortBy: 'date' | 'rating' | 'length'
) => ReviewedMovies[];

const sortMovies: SortedMoviesFn = (filteredMovies, sortBy) => filteredMovies.sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.dateAdding).getTime() - new Date(a.dateAdding).getTime();
    }
    if (sortBy === 'rating') {
      return Number(b.myRating) - Number(a.myRating);
    }
    if (sortBy === 'length') {
      return b.movieLength - a.movieLength;
    }
    return 0;
  });

export default sortMovies;