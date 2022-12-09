import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PlayButton from '../../components/play-button/play-button';
import TabList from '../tab-list/tab-list';
import MoviesList from '../movie-list/movie-list';
import { AppRoute, AttributeValue, Tab, AuthorizationStatus, Genres } from '../../const/const';
import { Movie } from '../../types/movies';
import { useAppSelector } from '../../hooks/index';
import { fetchSameMovies } from '../../store/api-actions';
import { store } from '../../store/store';

const MAX_NAMBER = 4;

type FilmProps = {
  dataMovies: Array<Movie>;
};

function Film({ dataMovies }: FilmProps): JSX.Element {
  const addReview = useAppSelector((state) => state.authorizationStatus);
  const sameMovies = useAppSelector((state) => state.sameMovies);
  const navigate = useNavigate();
  const [value, setValue] = useState ('');
  const [addIndex, setIndex] = useState(0);
  const params = useParams();
  const movieData = dataMovies.find(
    (movie) => movie.id.toString() === params.id
  );

  useEffect (() => {

    if (!movieData) {
      navigate(AppRoute.Mistake);
    }
  });

  if (!movieData) {
    return;
  }

  const { backgroundImage, name, released, posterImage, id, genre } = movieData;

  if(id !== addIndex) {
    store.dispatch(fetchSameMovies(id));
    setIndex(id);
  }

  const getTabTitles = ({ target }: React.MouseEvent<HTMLInputElement>) => {
    const { name } = target;
    setValue (name);
  };

  const pathToReview = `${AppRoute.Films}${id.toString()}${AppRoute.Review}`;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

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
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <Link to={AppRoute.Root} className="user-block__link">
                  Sign out
                </Link>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton id={id} />
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {addReview === AuthorizationStatus.Auth ?
                  <Link to={pathToReview} className="btn film-card__button">
                  Add review
                  </Link> :
                  ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list" onClick={getTabTitles}>
                  <li className={`film-nav__item ${Tab[value] === 'Overview' ? AttributeValue.Active : ''}`} >
                    <a className="film-nav__link" name="Overview">
                      Overview
                    </a>
                  </li>
                  <li className={`film-nav__item ${Tab[value] === 'Details' ? AttributeValue.Active : ''}`} >
                    <a className="film-nav__link" name="Details">
                      Details
                    </a>
                  </li>
                  <li className={`film-nav__item ${Tab[value] === 'Reviews' ? AttributeValue.Active : ''}`}>
                    <a className="film-nav__link" name="Reviews">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <TabList type={Tab[value]} movie = {movieData} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <MoviesList dataMovies={sameMovies} genre={Genres.SameMovies} counterNumber={MAX_NAMBER} />
          </div>
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

export default Film;
