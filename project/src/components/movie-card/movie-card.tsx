import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { AppRoute } from '../../const/const';
import { Movie } from '../../types/movies';

type MovieCardProps = {
  movie: Movie;
};

function MovieCard({ movie }: MovieCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const { previewImage, name, id, previewVideoLink } = movie;

  const changeValuePlayer = () => {
    setIsPlaying(!isPlaying);
  };

  const pathToMovie = `${AppRoute.Films}${id}`;

  return (
    <article className="small-film-card catalog__films-card">
      <Link to={pathToMovie}>
        <div
          className="small-film-card__image"
          onMouseOver={changeValuePlayer}
          onMouseOut={changeValuePlayer}
        >
          {isPlaying && <VideoPlayer src={previewVideoLink} />}
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={pathToMovie}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
