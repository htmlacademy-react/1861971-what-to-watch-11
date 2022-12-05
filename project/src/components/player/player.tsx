import { useParams, Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { Movie } from '../../types/movies';
import { AppRoute } from '../../const/const';

type PlayProps = {
  dataMovies: Array<Movie>;
};

function Player({
  dataMovies,
}: PlayProps): JSX.Element {
  const params = useParams();
  const dataMovie = dataMovies.find(
    (movie) => movie.id.toString() === params.id
  );

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playRef = useRef<HTMLButtonElement | null>(null);
  const buttonRef = useRef<SVGUseElement | null>(null);
  const sizeButton = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;
    videoRef.current?.addEventListener('loadedmetadata', () => {
      if (isVideoPlayerMounted) {
        videoRef.current.volume = 1.0;
        playRef.current?.addEventListener('click', () => {
          if (videoRef.current?.paused) {
            videoRef.current?.play();
            buttonRef.current?.setAttribute('xlink:href', '#pause');
          } else {
            videoRef.current?.pause();
            buttonRef.current?.setAttribute('xlink:href', '#play-s');
          }
        });
        sizeButton.current?.addEventListener('click', () => {
          if(spanRef.current?.innerText === 'Full screen'){
            videoRef.current.style.width = `${50}%`;
            videoRef.current.style.height = `${50}%`;
            spanRef.current.innerText = 'Small screen';
          } else {
            videoRef.current?.removeAttribute('style');
            spanRef.current.innerText = 'Full screen';
          }
        });
      }
    });

    return () => {
      isVideoPlayerMounted = false;
    };
  });

  if (!dataMovie) {
    document.location.href = `${AppRoute.Mistake}`;
    return;
  }

  const { backgroundImage, videoLink } = dataMovie;

  return (
    <div className="player">
      <video
        src={videoLink}
        className="player__video"
        poster={backgroundImage}
        ref={videoRef}
      >
      </video>
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
              value="0"
              max="100"
            >
            </progress>
            <div className="player__toggler" style={{ left: '0%' }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" ref={playRef}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s" ref={buttonRef}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" ref={sizeButton}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span ref={spanRef}>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
