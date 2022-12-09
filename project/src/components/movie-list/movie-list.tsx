import { useMemo } from 'react';
import MovieCard from '../../components/movie-card/movie-card';
import { Movie } from '../../types/movies';

type getNewMovies = (newFilms:Array<Movie>) => void;

type MovieListProps = {
  dataMovies: Array<Movie>;
  genre: string;
  counterNumber: number;
  getNewMovies: getNewMovies;
};

function MoviesList({
  dataMovies,
  genre,
  counterNumber,
  getNewMovies
}: MovieListProps): JSX.Element {

  const sortByGenre = () => {
    const MIN_NUMBER = 0;

    switch (genre) {
      case 'All':
        useMemo(() => getNewMovies(dataMovies),[genre]);
        return dataMovies.slice(0, Math.min(dataMovies.length, counterNumber));
      case 'sameMovies':
        return dataMovies.slice(MIN_NUMBER, counterNumber);
      default:
        const filmsByGenre = dataMovies.filter((movie) => movie.genre === genre);
        useMemo(() => getNewMovies(filmsByGenre),[genre]);
        return filmsByGenre.slice(0, Math.min(dataMovies.length, counterNumber));
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
