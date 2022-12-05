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
  loadComments
} from './action';
import { Genres, AuthorizationStatus } from '../const/const';
import { Movie, Comment } from '../types/movies';

const {
  Comedies,
  Crime,
  Documentary,
  Dramas,
  Horror,
  KidsFamily,
  Romance,
  SciFi,
  Thrillers,
} = Genres;
const COUNTER = 8;

type InitalState = {
  movies: Array<Movie>;
  genre: string;
  counter: number;
  isLoading: boolean;
  authorizationStatus: string;
  error: string | null;
  comments: Array<Comment>;
};

const initialState: InitalState = {
  movies: [],
  genre: allGenres.toString(),
  counter: COUNTER,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  comments: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(allGenres, (state,action) => {
      state.movies = action.payload;
      state.counter = COUNTER;
      state.genre = allGenres.toString();
    })
    .addCase(comediesGenres, (state,action) => {
      state.counter = COUNTER;
      state.movies = action.payload.filter((movie) => movie.genre === Comedies);
      state.genre = comediesGenres.toString();
    })
    .addCase(crimeGenres, (state,action) => {
      state.counter = COUNTER;
      state.movies = action.payload.filter((movie) => movie.genre === Crime);
      state.genre = crimeGenres.toString();
    })
    .addCase(documentaryGenres, (state,action) => {
      state.counter = COUNTER;
      state.movies = action.payload.filter(
        (movie) => movie.genre === Documentary
      );
      state.genre = documentaryGenres.toString();
    })
    .addCase(dramasGenres, (state,action) => {
      state.counter = COUNTER;
      state.movies = action.payload.filter((movie) => movie.genre === Dramas);
      state.genre = dramasGenres.toString();
    })
    .addCase(horrorGenres, (state,action) => {
      state.counter = COUNTER;
      state.movies = action.payload.filter((movie) => movie.genre === Horror);
      state.genre = horrorGenres.toString();
    })
    .addCase(kidsFamilyGenres, (state,action) => {
      state.counter = COUNTER;
      state.movies = action.payload.filter((movie) => movie.genre === KidsFamily);
      state.genre = kidsFamilyGenres.toString();
    })
    .addCase(romanceGenres, (state,action) => {
      state.counter = COUNTER;
      state.movies = action.payload.filter((movie) => movie.genre === Romance);
      state.genre = romanceGenres.toString();
    })
    .addCase(sciFiGenres, (state,action) => {
      state.counter = COUNTER;
      state.movies = action.payload.filter((movie) => movie.genre === SciFi);
      state.genre = sciFiGenres.toString();
    })
    .addCase(thrillersGenres, (state,action) => {
      state.counter = COUNTER;
      state.movies = action.payload.filter((movie) => movie.genre === Thrillers);
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
    });
});

export { reducer };
