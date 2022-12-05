export enum AppRoute {
  Root = '/',
  Login = '/login',
  List = '/mylist',
  Films = '/films/',
  Review = '/review',
  View = '/player/',
  Mistake = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum AttributeValue {
  Active = 'film-nav__item--active',
  GenresActive = 'catalog__genres-item--active'
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum Genres {
  All = 'All',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsFamily = 'KidsFamily',
  Romance = 'Romance',
  SciFi = 'SciFi',
  Thrillers = 'Thrillers',
}

export enum APIRoute {
Films = '/films',
Login = '/login',
Promo = '/promo',
Similar = '/similar',
Comments = '/comments/'
}

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
};

export const TIMEOUT_SHOW_ERROR = 5000;
