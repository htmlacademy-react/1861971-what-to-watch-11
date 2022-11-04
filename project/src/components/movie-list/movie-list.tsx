import MovieCard from '../../components/movie-card/movie-card';
import { Data } from '../../types/movies';

type MovieListProps = {
  dataMovies: Array<Data>;
};

function MovieList ({dataMovies}: MovieListProps): JSX.Element {
  return (
    <>
      {dataMovies.map ((movie) => <MovieCard key = {movie.index.toString()} movie = {movie} />)}
    </>
  );
}

export default MovieList;
