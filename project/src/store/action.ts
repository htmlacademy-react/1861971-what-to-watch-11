import { createAction } from '@reduxjs/toolkit';
import { Movie, Comment } from '../types/movies';
import { AuthorizationStatus } from '../const/const';

export const allGenres = createAction<Movie[]>('All');
export const comediesGenres = createAction<Movie[]>('Comedies');
export const crimeGenres = createAction<Movie[]>('Crime');
export const documentaryGenres = createAction<Movie[]>('Documentary');
export const dramasGenres = createAction<Movie[]>('Dramas');
export const horrorGenres = createAction<Movie[]>('Horror');
export const kidsFamilyGenres = createAction<Movie[]>('KidsFamily');
export const romanceGenres = createAction<Movie[]>('Romance');
export const sciFiGenres = createAction<Movie[]>('SciFi');
export const thrillersGenres = createAction<Movie[]>('Thrillers');
export const showMoreMovies = createAction<Movie[]>('ShowMore');
export const loadMovies = createAction<Movie[]>('data/loadMovies');
export const loading = createAction<boolean>('data/loading');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setError = createAction<string | null>('setError');
export const loadComments = createAction<Comment[]>('data/loadComments');
export const loadSameMovies = createAction<Movie[]>('data/loadSameMovies');
