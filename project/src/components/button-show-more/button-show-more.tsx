import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { showMoreMovies } from '../../store/action';

function ButtonShowMore(): JSX.Element {
  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state);
  const { movies, counter } = films;

  if (movies.length === 0 || counter >= movies.length) {
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
