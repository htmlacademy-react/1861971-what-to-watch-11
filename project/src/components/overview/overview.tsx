import { Movie } from '../../types/movies';

type OverviewProps = {
  movie: Movie;
};

function Overview({ movie }: OverviewProps): JSX.Element {
  const {rating, scoresCount, description, director, starring } = movie;

  const evaluationDescription = () => {
    if (rating >= 0 && rating < 3) {
      return 'Bad';
    }
    if (rating >= 3 && rating < 5) {
      return 'Normal';
    }
    if (rating >= 5 && rating > 8) {
      return 'Good';
    }
    if (rating >= 8 && rating > 10) {
      return 'Very good';
    }
    if (rating > 10) {
      return 'Awesome';
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{evaluationDescription()}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>
          {description}
        </p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.map((actor) => `${actor},`)}
          </strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
