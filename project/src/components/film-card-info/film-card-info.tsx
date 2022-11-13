import PlayButton from '../../components/play-button/play-button';
import { DataMovies } from '../../types/movies';

type FilmCardInfoProps = DataMovies;

function FilmCardInfo({
  imageHeader,
  movieDescription,
  id,
}: FilmCardInfoProps): JSX.Element {
  const { genre, screeningYear, movieTitle } = movieDescription;

  return (
    <div className="film-card__info">
      <div className="film-card__poster">
        <img
          src={imageHeader}
          alt="The Grand Budapest Hotel poster"
          width="218"
          height="327"
        />
      </div>

      <div className="film-card__desc">
        <h2 className="film-card__title">{movieTitle}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{genre}</span>
          <span className="film-card__year">{screeningYear}</span>
        </p>

        <div className="film-card__buttons">
          <PlayButton id={id} />
          <button className="btn btn--list film-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
            <span className="film-card__count">9</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilmCardInfo;
