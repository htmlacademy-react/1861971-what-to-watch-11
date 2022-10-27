import MovieCard from '../../components/movie-card/movie-card';

type Data = {
  index: string;
  image: string;
  movieTitle: string;
};

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
