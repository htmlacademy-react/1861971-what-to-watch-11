import MovieCard from '../../components/movie-card/movie-card';
import { Movie } from '../../types/movies';

type MovieListProps = {
  dataMovies: Array<Movie>;
  genre: string;
  counterNumber: number;
};

function MovieList({
  dataMovies,
  genre,
  counterNumber,
}: MovieListProps): JSX.Element {
  const sortByGenre = () => {
    const MIN_NAMBER = 0;
    const MAX_NAMBER = 4;

    if (genre === 'All') {
      return dataMovies.slice(0, Math.min(dataMovies.length, counterNumber));
    }
    const movies = dataMovies.filter((movie) => movie.genre === genre);
    return movies.slice(MIN_NAMBER, MAX_NAMBER);
  };

  return (
    <>
      {sortByGenre().map((movie) => (
        <MovieCard key={movie.id.toString()} movie={movie} />
      ))}
    </>
  );
}

export default MovieList;
