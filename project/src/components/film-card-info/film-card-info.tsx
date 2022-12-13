import PlayButton from '../../components/play-button/play-button';
import { useAppSelector } from '../../hooks/index';

function FilmCardInfo(): JSX.Element {

  const promoMovie = useAppSelector((state) => state.promoMovie);
  const {posterImage, name, genre, released, id} = promoMovie;

  return (
    <div className="film-card__info">
      <div className="film-card__poster">
        <img
          src={posterImage}
          alt="The Grand Budapest Hotel poster"
          width="218"
          height="327"
        />
      </div>

      <div className="film-card__desc">
        <h2 className="film-card__title">{name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{genre}</span>
          <span className="film-card__year">{released}</span>
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
