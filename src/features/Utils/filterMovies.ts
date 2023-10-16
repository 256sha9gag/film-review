import { ReviewedMovies } from "store/slice/movieSlice";

type FilteredMoviesFn = (
  movies: ReviewedMovies[],
  ratingFilter: number | null,
  lengthFilter: number | null,
  searchTerm: string
) => ReviewedMovies[];

const filterMovies: FilteredMoviesFn = (
  movies,
  ratingFilter,
  lengthFilter,
  searchTerm
) =>  movies.filter((movie) => {
    const matchesSearchTerm = movie.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRatingFilter =
      ratingFilter === null || Number(movie.myRating) >= ratingFilter;
    const matchesLengthFilter =
      lengthFilter === null || movie.movieLength >= lengthFilter;
    return matchesSearchTerm && matchesRatingFilter && matchesLengthFilter;
  });


export default filterMovies;