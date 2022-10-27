type MovieCardProps = {
  movie: {
    image: string;
    movieTitle: string;
  };
};

function MovieCard ({movie}: MovieCardProps): JSX.Element {
  const {image, movieTitle} = movie;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src = {image} alt= {movieTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{movieTitle}</a>
      </h3>
    </article>
  );
}

export default MovieCard;
