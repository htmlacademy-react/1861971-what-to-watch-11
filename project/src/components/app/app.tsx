import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  dataMovies: {
    movieCard: Array<object>;
    imageHeader: string;
    movieDescription: {
      genre: string;
      screeningYear: number;
      movieTitle: string;
    };
  } ;
};

function App({dataMovies}: AppProps): JSX.Element {
  return <MainPage dataMovies = {dataMovies} /> ;
}

export default App;
