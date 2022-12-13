import { NavigateFunction } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Movie, Comment, PromoMovie } from '../types/movies';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AuthData, UserData, FeedbackData, AppRoute } from '../const/const';
import { loadMovies, loading, requireAuthorization, setError, loadComments, loadSameMovies } from './action';
import { store } from './store';
import { saveToken } from '../services/token';
import {createAPI} from '../services/api';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchMovieAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchMovies', async (_arg, { dispatch, extra: api }) => {
  dispatch(loading(true));
  const responseMovies = await api.get<Movie[]>(APIRoute.Films);
  const responsePromoMovie = await api.get<PromoMovie>(APIRoute.Promo);
  dispatch(loading(false));
  dispatch(loadMovies({
    dataFilms:responseMovies.data,
    dataPromoMovie:responsePromoMovie.data
  }));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const loadingComment = createAsyncThunk(
  'user/loadingComment',
  async ({feedbackData, id, navigate}: {feedbackData:FeedbackData; id:number; navigate:NavigateFunction}, {dispatch}) => {
    dispatch(loading(true));
    try {
      await createAPI().post<FeedbackData>(`${APIRoute.Comments}${id}`,feedbackData);
      navigate(`${AppRoute.Films}${id}`);
      dispatch(loading(false));
    } catch {
      dispatch(setError('Комментарий не загружен.Повторите загрузку заново'));
      dispatch(loading(false));
    }
  },
);

export const fetchComments = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchComments', async (filmId, { dispatch, extra: api }) => {
  const { data } = await api.get<Comment[]>(`${APIRoute.Comments}${filmId}`);
  dispatch(loadComments(data));
});

export const fetchSameMovies = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchSameMovies', async (filmId, { dispatch, extra: api }) => {
  const { data } = await api.get<Movie[]>(`${APIRoute.Films}/${filmId}${APIRoute.Similar}`);
  dispatch(loadSameMovies(data));
});
