import MovieCard from '../../components/movie-card/movie-card';

type MovieListProps = {
  dataMovies: Array<object>;
};

function MovieList ({dataMovies}: MovieListProps): JSX.Element {
return {dataMovies.map ((movie) => <MovieCard movie = {movie} />)}
};

export default MovieList;
