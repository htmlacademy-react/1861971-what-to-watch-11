import MovieList from '../../components/movie-list/movie-list';
import Image from '../../components/image/image';
import FilmCardInfo from '../../components/film-card-info/film-card-info';
import UserAvatar from '../../components/user-avatar/user-avatar';
import RegistrationEntry from '../../components/registration-entry/registration-entry';
import ButtonShowMore from '../../components/button-show-more/button-show-more';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorMessage from '../../components/error-message/error-message';
import { AuthorizationStatus, AttributeValue, Genres } from '../../const/const';
import { DataMovies } from '../../types/movies';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
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
} from '../../store/action';

type MainPageProps = {
  movieDescriptionAndTitle: DataMovies;
  authorizationStatus: string;
};

function MainPage({
  movieDescriptionAndTitle,
  authorizationStatus,
}: MainPageProps): JSX.Element {
  const { image, movieDescription, index } = movieDescriptionAndTitle;
  const {
    All,
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

  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state);
  const { movies, genre, counter, isLoading } = films;

  const getMovies = async (action) => {
    const response = await fetch('https://11.react.pages.academy/wtw/films');
    const dataMovies = await response.json();
    dispatch(action(dataMovies));
  };

  return (
    <>
      <section className="film-card">
        <Image image={image} />
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a href="*" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            {authorizationStatus === AuthorizationStatus.Auth ? (
              <UserAvatar />
            ) : (
              <RegistrationEntry />
            )}
          </ul>
        </header>

        <div className="film-card__wrap">
          <ErrorMessage />
          <FilmCardInfo
            image={image}
            movieDescription={movieDescription}
            index={index}
          />
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li
              className={`catalog__genres-item ${
                genre === All ? AttributeValue.GenresActive : ''
              }`}
            >
              <a
                className="catalog__genres-link"
                onClick={() => getMovies(allGenres)}
              >
                All genres
              </a>
            </li>
            <li
              className={`catalog__genres-item ${
                genre === Comedies ? AttributeValue.GenresActive : ''
              }`}
            >
              <a
                className="catalog__genres-link"
                onClick={() => getMovies(comediesGenres)}
              >
                Comedies
              </a>
            </li>
            <li
              className={`catalog__genres-item ${
                genre === Crime ? AttributeValue.GenresActive : ''
              }`}
            >
              <a
                className="catalog__genres-link"
                onClick={() => getMovies(crimeGenres)}
              >
                Crime
              </a>
            </li>
            <li
              className={`catalog__genres-item ${
                genre === Documentary ? AttributeValue.GenresActive : ''
              }`}
            >
              <a
                className="catalog__genres-link"
                onClick={() => getMovies(documentaryGenres)}
              >
                Documentary
              </a>
            </li>
            <li
              className={`catalog__genres-item ${
                genre === Dramas ? AttributeValue.GenresActive : ''
              }`}
            >
              <a
                className="catalog__genres-link"
                onClick={() => getMovies(dramasGenres)}
              >
                Dramas
              </a>
            </li>
            <li
              className={`catalog__genres-item ${
                genre === Horror ? AttributeValue.GenresActive : ''
              }`}
            >
              <a
                className="catalog__genres-link"
                onClick={() => getMovies(horrorGenres)}
              >
                Horror
              </a>
            </li>
            <li
              className={`catalog__genres-item ${
                genre === KidsFamily ? AttributeValue.GenresActive : ''
              }`}
            >
              <a
                className="catalog__genres-link"
                onClick={() => getMovies(kidsFamilyGenres)}
              >
                Kids & Family
              </a>
            </li>
            <li
              className={`catalog__genres-item ${
                genre === Romance ? AttributeValue.GenresActive : ''
              }`}
            >
              <a
                className="catalog__genres-link"
                onClick={() => getMovies(romanceGenres)}
              >
                Romance
              </a>
            </li>
            <li
              className={`catalog__genres-item ${
                genre === SciFi ? AttributeValue.GenresActive : ''
              }`}
            >
              <a
                className="catalog__genres-link"
                onClick={() => getMovies(sciFiGenres)}
              >
                Sci-Fi
              </a>
            </li>
            <li
              className={`catalog__genres-item ${
                genre === Thrillers ? AttributeValue.GenresActive : ''
              }`}
            >
              <a
                className="catalog__genres-link"
                onClick={() => getMovies(thrillersGenres)}
              >
                Thrillers
              </a>
            </li>
          </ul>
          <div className="catalog__films-list">
            {!isLoading && (
              <MovieList
                dataMovies={movies}
                genre={All}
                counterNumber={counter}
              />
            )}
            {isLoading && <LoadingScreen />}
          </div>
          <ButtonShowMore />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="*" className="logo__link logo__link--light">
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
