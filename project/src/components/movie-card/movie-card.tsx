import {useState} from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { AppRoute } from '../../const/const';
import { Data } from '../../types/movies';


type MovieCardProps = {
  movie: Data;
};


function MovieCard ({movie}: MovieCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);


  const {image, movieTitle, index, video} = movie;


  const changeValuePlayer = () => {
    setIsPlaying (!isPlaying);
  };


  const path = `${AppRoute.Films}${index}`;

  return (
    <article className="small-film-card catalog__films-card">
      <Link to = {path}>
        <div className="small-film-card__image"onMouseOver={changeValuePlayer} onMouseOut={changeValuePlayer}>
          {isPlaying && <VideoPlayer src={video} />}
          <img src = {image} alt= {movieTitle} width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={path} >{movieTitle}</Link>
      </h3>
    </article>
  );
}


export default MovieCard;
