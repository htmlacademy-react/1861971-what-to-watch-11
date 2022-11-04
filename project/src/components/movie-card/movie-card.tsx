import {Link} from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { Data } from '../../types/movies';


type MovieCardProps = {
  movie: Data;
};


function MovieCard ({movie}: MovieCardProps): JSX.Element {
  const {image, movieTitle, index, video} = movie;
  const path = `${AppRoute.Films}${index}`;


  const getDataServer = () => {
    fetch (video)
      .then((response) => {
        if (response.ok) {
          return alert ('Запрос на сервер выполнен успешно.Для проверки откройте вкладку Network в инструментах разработчика.');
        }
        throw new Error ();
      })
      .catch((error) => alert ('Запрос на сервер не выполнен.Для проверки откройте вкладку Network в инструментах разработчика.'));
  };


  let timeoutId = 0;
  const videoPlayback = () => {
    timeoutId = setTimeout(() => getDataServer (), 2000);
  };

  const clearTimeout = () => {
    clearTimeout(timeoutId);
  };

  return (
    <article className="small-film-card catalog__films-card">
      <Link to = {path}>
        <div className="small-film-card__image"onMouseOver={videoPlayback} onClick={clearTimeout}>
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
