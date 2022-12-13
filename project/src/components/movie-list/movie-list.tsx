import MovieCard from '../../components/movie-card/movie-card';
import { Movie } from '../../types/movies';

type MovieListProps = {
  dataMovies: Array<Movie>;
  genre: string;
  counterNumber: number;
  dataSameMoviesByGenre: Array<Movie>;
};

function MoviesList({
  dataMovies,
  genre,
  counterNumber,
  dataSameMoviesByGenre
}: MovieListProps): JSX.Element {

  const sortByGenre = () => {
    const MIN_NUMBER = 0;

    switch (genre) {
      case 'All':
        return dataMovies.slice(0, Math.min(dataMovies.length, counterNumber));
      case 'sameMovies':
        return dataMovies.slice(MIN_NUMBER, counterNumber);
      default:
        return dataSameMoviesByGenre.slice(0, Math.min(dataSameMoviesByGenre.length, counterNumber));
    }
  };

  return (
    <>
      {sortByGenre().map((movie) => (
        <MovieCard key={movie.id.toString()} movie={movie} />
      ))}
    </>
  );
}

export default MoviesList;
