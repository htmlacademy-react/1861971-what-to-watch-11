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

    if (genre === 'All') {
      return dataMovies.slice(0, Math.min(dataMovies.length, counterNumber));
    }
    return dataMovies.slice(MIN_NAMBER, counterNumber);
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
