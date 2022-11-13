import { useParams, Link } from 'react-router-dom';
import { Data } from '../../types/movies';
import { AppRoute } from '../../const/const';

type PlayProps = {
  dataMovies: Array<Data>;
};

function Player({ dataMovies }: PlayProps): JSX.Element {
  const params = useParams();
  const dataMovie = dataMovies.find(
    (movie) => movie.index.toString() === params.id
  );

  if (!dataMovie) {
    document.location.href = `${AppRoute.Mistake}`;
    return;
  }

  const { image } = dataMovie;

  return (
    <div className="player">
      <video src="#" className="player__video" poster={image}></video>
      <Link to={AppRoute.Root}>
        <button type="button" className="player__exit">
          Exit
        </button>
      </Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value="30"
              max="100"
            >
            </progress>
            <div className="player__toggler" style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
