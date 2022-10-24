import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  dataMovies: Array<object>;
};

function App({dataMovies}: AppProps): JSX.Element {
  return <MainPage dataMovies = {dataMovies} /> ;
}

export default App;
