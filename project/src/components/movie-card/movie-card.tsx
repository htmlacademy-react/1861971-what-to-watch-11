type MovieCardProps = {
  dataMovies: Array<object>;
};

const creatMovies = (dataMovies: Array<object>) => {
  const components = [];
  for (const movie of dataMovies) {
    const {image, movieTitle} = movie;
    const element = (
      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img src = {image} alt= {movieTitle} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">{movieTitle}</a>
        </h3>
      </article>
    );
    components.push (element);
  }
  return components;
};

function MovieCard ({dataMovies}: MovieCardProps): JSX.Element {
  return (
    <>
      {creatMovies (dataMovies)}
    </>
  );
}

export default MovieCard;
