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
import { Movie, Comment } from '../types/movies';

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
};

const initialState: InitalState = {
  movies: [],
  genre: allGenres.toString(),
  counter: COUNTER,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  comments: [],
  sameMovies: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(allGenres, (state) => {
      state.counter = COUNTER;
      state.genre = allGenres.toString();
    })
    .addCase(comediesGenres, (state) => {
      state.counter = COUNTER;
      state.genre = comediesGenres.toString();
    })
    .addCase(crimeGenres, (state) => {
      state.counter = COUNTER;
      state.genre = crimeGenres.toString();
    })
    .addCase(documentaryGenres, (state) => {
      state.counter = COUNTER;
      state.genre = documentaryGenres.toString();
    })
    .addCase(dramasGenres, (state) => {
      state.counter = COUNTER;
      state.genre = dramasGenres.toString();
    })
    .addCase(horrorGenres, (state) => {
      state.counter = COUNTER;
      state.genre = horrorGenres.toString();
    })
    .addCase(kidsFamilyGenres, (state) => {
      state.counter = COUNTER;
      state.genre = kidsFamilyGenres.toString();
    })
    .addCase(romanceGenres, (state) => {
      state.counter = COUNTER;
      state.genre = romanceGenres.toString();
    })
    .addCase(sciFiGenres, (state) => {
      state.counter = COUNTER;
      state.genre = sciFiGenres.toString();
    })
    .addCase(thrillersGenres, (state) => {
      state.counter = COUNTER;
      state.genre = thrillersGenres.toString();
    })
    .addCase(showMoreMovies, (state) => {
      state.counter += COUNTER;
    })
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
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
