import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { showMoreMovies } from '../../store/action';

function ButtonShowMore(): JSX.Element {
  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state);
  const { movies, counter, sameMoviesByGenre, genre } = films;

  if (genre === 'All' && (movies.length === 0 || counter >= movies.length)) {
    return;
  }

  if (genre !== 'All' && (sameMoviesByGenre.length === 0 || counter >= sameMoviesByGenre.length)) {
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
