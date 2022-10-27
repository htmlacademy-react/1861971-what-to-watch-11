import MainPage from '../../pages/main-page/main-page';

type Data = {
  index: string;
  image: string;
  movieTitle: string;
};

type AppProps = {
  dataMovies:Array<Data>;
  movieDescriptionAndTitle:{
    imageHeader: string;
    movieDescription: {
      genre: string;
      screeningYear: number;
      movieTitle: string;
    };
  };
};

function App({dataMovies, movieDescriptionAndTitle}: AppProps): JSX.Element {
  return <MainPage dataMovies = {dataMovies} movieDescriptionAndTitle = {movieDescriptionAndTitle} /> ;
}

export default App;
