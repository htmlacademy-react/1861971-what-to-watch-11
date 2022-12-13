import { createReducer } from '@reduxjs/toolkit';
import {
  allGenres,
  comediesGenres,
  crimeGenres,
  documentaryGenres,
  dramasGenres,
  horrorGenres,
  kidsFamilyGenres,
  romanceGenres,
  sciFiGenres,
  thrillersGenres,
  showMoreMovies,
  loadMovies,
  loading,
  requireAuthorization,
  setError,
  loadComments,
  loadSameMovies
} from './action';
import { AuthorizationStatus } from '../const/const';
import { Movie, Comment, PromoMovie } from '../types/movies';

const COUNTER = 8;

type InitalState = {
  movies: Array<Movie>;
  genre: string;
  counter: number;
  isLoading: boolean;
  authorizationStatus: string;
  error: string | null;
  comments: Array<Comment>;
  sameMovies: Array<Movie>;
  sameMoviesByGenre: Array<Movie>;
  promoMovie: PromoMovie;

};

const initialState: InitalState = {
  movies: [],
  genre: allGenres.toString(),
  counter: COUNTER,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  comments: [],
  sameMovies: [],
  sameMoviesByGenre: [],
  promoMovie: {},
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(allGenres, (state) => {
      state.counter = COUNTER;
      state.genre = allGenres.toString();
    })
    .addCase(comediesGenres, (state) => {
      state.genre = comediesGenres.toString();
      state.sameMoviesByGenre = state.movies.filter((movie) => movie.genre === state.genre);
      state.counter = COUNTER;
    })
    .addCase(crimeGenres, (state) => {
      state.genre = crimeGenres.toString();
      state.sameMoviesByGenre = state.movies.filter((movie) => movie.genre === state.genre);
      state.counter = COUNTER;
    })
    .addCase(documentaryGenres, (state) => {
      state.genre = documentaryGenres.toString();
      state.sameMoviesByGenre = state.movies.filter((movie) => movie.genre === state.genre);
      state.counter = COUNTER;
    })
    .addCase(dramasGenres, (state) => {
      state.genre = dramasGenres.toString();
      state.sameMoviesByGenre = state.movies.filter((movie) => movie.genre === state.genre);
      state.counter = COUNTER;
    })
    .addCase(horrorGenres, (state) => {
      state.genre = horrorGenres.toString();
      state.sameMoviesByGenre = state.movies.filter((movie) => movie.genre === state.genre);
      state.counter = COUNTER;
    })
    .addCase(kidsFamilyGenres, (state) => {
      state.genre = kidsFamilyGenres.toString();
      state.sameMoviesByGenre = state.movies.filter((movie) => movie.genre === state.genre);
      state.counter = COUNTER;
    })
    .addCase(romanceGenres, (state) => {
      state.genre = romanceGenres.toString();
      state.sameMoviesByGenre = state.movies.filter((movie) => movie.genre === state.genre);
      state.counter = COUNTER;
    })
    .addCase(sciFiGenres, (state) => {
      state.genre = sciFiGenres.toString();
      state.sameMoviesByGenre = state.movies.filter((movie) => movie.genre === state.genre);
      state.counter = COUNTER;
    })
    .addCase(thrillersGenres, (state) => {
      state.genre = thrillersGenres.toString();
      state.sameMoviesByGenre = state.movies.filter((movie) => movie.genre === state.genre);
      state.counter = COUNTER;
    })
    .addCase(showMoreMovies, (state) => {
      state.counter += COUNTER;
    })
    .addCase(loadMovies, (state, action) => {
      const {dataFilms, dataPromoMovie} = action.payload;
      state.movies = dataFilms;
      state.promoMovie = dataPromoMovie;
    })
    .addCase(loading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadSameMovies, (state, action) => {
      state.sameMovies = action.payload;
    });
});

export { reducer };
