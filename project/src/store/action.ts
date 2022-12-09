import { createAction } from '@reduxjs/toolkit';
import { Movie, Comment } from '../types/movies';
import { AuthorizationStatus } from '../const/const';

export const allGenres = createAction('All');
export const comediesGenres = createAction('Comedy');
export const crimeGenres = createAction('Crime');
export const documentaryGenres = createAction('Documentary');
export const dramasGenres = createAction('Drama');
export const horrorGenres = createAction('Horror');
export const kidsFamilyGenres = createAction('KidsFamily');
export const romanceGenres = createAction('Romance');
export const sciFiGenres = createAction('SciFi');
export const thrillersGenres = createAction('Thriller');
export const showMoreMovies = createAction('ShowMore');
export const loadMovies = createAction<Movie[]>('data/loadMovies');
export const loading = createAction<boolean>('data/loading');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setError = createAction<string | null>('setError');
export const loadComments = createAction<Comment[]>('data/loadComments');
export const loadSameMovies = createAction<Movie[]>('data/loadSameMovies');
