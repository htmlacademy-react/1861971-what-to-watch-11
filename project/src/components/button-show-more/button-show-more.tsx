import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { showMoreMovies } from '../../store/action';
import { Movie } from '../../types/movies';

type ButtonShowMoreProps = {
  movieCounter: Array<Movie>;
};

function ButtonShowMore({movieCounter}: ButtonShowMoreProps): JSX.Element {
  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state);
  const { movies, counter } = films;

  if (movieCounter.length === 0 || counter >= movieCounter.length) {
    return;
  }

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => dispatch(showMoreMovies())}
      >
        Show more
      </button>
    </div>
  );
}

export default ButtonShowMore;
