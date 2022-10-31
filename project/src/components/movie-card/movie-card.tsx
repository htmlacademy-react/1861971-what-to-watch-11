import {Link} from 'react-router-dom';
import { AppRoute } from '../../const/const';

type MovieCardProps = {
  id: string;
  movie: {
    image: string;
    movieTitle: string;
  };
};

function MovieCard ({movie, id}: MovieCardProps): JSX.Element {
  const {image, movieTitle} = movie;
  const path = `${AppRoute.Films}${id}`;
  return (
    <article className="small-film-card catalog__films-card">
      <Link to = {path}>
        <div className="small-film-card__image">
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
