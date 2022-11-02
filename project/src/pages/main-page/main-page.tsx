import MovieList from '../../components/movie-list/movie-list';
import Image from '../../components/image/image';
import FilmCardInfo from '../../components/film-card-info/film-card-info';
import UserAvatar from '../../components/user-avatar/user-avatar';
import RegistrationEntry from '../../components/registration-entry/registration-entry';
import { AuthorizationStatus } from '../../const/const';

type Data = {
  index: number;
  image: string;
  movieTitle: string;
};

type movieDescriptionAndTitle = {
  id: number;
    imageHeader: string;
    movieDescription: {
      genre: string;
      screeningYear: number;
      movieTitle: string;
    };
}

type MainPageProps = {
  dataMovies: Array<Data>;
  movieDescriptionAndTitle: movieDescriptionAndTitle;
  authorizationStatus: string;
};

function MainPage ({dataMovies, movieDescriptionAndTitle, authorizationStatus}: MainPageProps): JSX.Element {
  const {imageHeader, movieDescription, id} = movieDescriptionAndTitle;
  return (
    <>
      <section className="film-card">
        <Image image = {imageHeader} />
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a href='*' className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            {authorizationStatus === AuthorizationStatus.Auth ? <UserAvatar /> : <RegistrationEntry />}
          </ul>
        </header>

        <div className="film-card__wrap">
          <FilmCardInfo movieCover = {imageHeader} movieDescription = {movieDescription} id = {id}/>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="*" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="*" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="*" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="*" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="*" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="*" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="*" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="*" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="*" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="*" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>
          <div className="catalog__films-list">
            <MovieList dataMovies={dataMovies} />
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href='*' className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>

  );
}

export default MainPage;
