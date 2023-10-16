import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MovieData {
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  names: string[];
  type: string;
  year: number;
  description: string;
  shortDescription: string;
  logo: string;
  poster: string;
  backdrop: string;
  rating: number;
  votes: number;
  movieLength: number;
  genres: string[];
  countries: string[];
  releaseYears: number[];
}

export interface Movie {
  id: number;
  name: string;
  poster: string;
  rating: string;
  year: number;
  shortDescription: string;
  genres: Array<string>;
  description: string;
  movieLength: number;
}

export interface ReviewedMovies extends Movie {
  dateAdding: string;
  comment: string;
  myRating: number;
}

interface MovieState {
  reviewedMovies: ReviewedMovies[];
  movies: Movie[] | null;
  selectedMovie: Movie | null;
  selectedReview: ReviewedMovies | null;
  error: string | null;
  loading: boolean;
  searchResults: boolean;
}

const initialState: MovieState = {
  reviewedMovies: [],
  selectedReview: null,
  movies: null,
  selectedMovie: null,
  error: null,
  searchResults: false,
  loading: false,
};

export const searchMovies = createAsyncThunk<Movie[], string>(
  "movie/found",
  async (query: string) => {
    try {
      const response = await fetch(
        `https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=10&query=${query}}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "MT7TGGW-FRN4BCT-NG8AW3M-NAK2F1M",
          },
        },
      );
      const data = await response.json();

      if (data.docs.length === 0) {
        return [];
      } else {
        const movies = data.docs.map((doc: MovieData) => ({
          id: doc.id,
          name: doc.name,
          poster: doc.poster,
          rating: doc.rating,
          year: doc.year,
          shortDescription: doc.shortDescription,
          genres: doc.genres,
          description: doc.description,
          movieLength: doc.movieLength,
        }));
        return movies;
      }
    } catch (error) {
      return error;
    }
  },
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSelectedMovie(state, { payload }) {
      state.selectedMovie = payload;
    },
    setSelectedReviewedMovie(state, { payload }) {
      state.selectedReview = payload;
    },
    addReviewedMovie(state, { payload }) {
      state.reviewedMovies.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state: MovieState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state: MovieState, action) => {
        state.loading = false;
        state.error = null;
        state.movies = action.payload;
      })
      .addCase(searchMovies.rejected, (state: MovieState, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSelectedMovie, addReviewedMovie, setSelectedReviewedMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
