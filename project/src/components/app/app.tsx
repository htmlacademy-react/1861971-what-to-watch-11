import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import MyList from '../../components/my-list/my-list';
import SignIn from '../sign-in/sign-in';
import Film from '../film/film';
import PrivateRoute from '../private-route/private-route';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Error from '../error/error';
import { AppRoute } from '../../const/const';
import { DataMovies } from '../../types/movies';
import { useAppSelector } from '../../hooks/index';

type AppProps = {
  movieDescriptionAndTitle: DataMovies;
};

function App({ movieDescriptionAndTitle }: AppProps): JSX.Element {
  const films = useAppSelector((state) => state);
  const { movies, authorizationStatus } = films;

  const { Root, Login, List, Films, Review, View, Mistake } = AppRoute;
  const path1 = `:id${Review}`;
  const path2 = `${View}:id`;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Root}>
          <Route
            index
            element={
              <MainPage
                movieDescriptionAndTitle={movieDescriptionAndTitle}
                authorizationStatus={authorizationStatus}
              />
            }
          >
          </Route>
          <Route path={Login} element={<SignIn />}></Route>
          <Route path={List} element={<MyList />}></Route>
          <Route path={Films}>
            <Route path=":id" element={<Film dataMovies={movies} />}></Route>
            <Route
              path={path1}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <AddReview dataMovies={movies} />
                </PrivateRoute>
              }
            >
            </Route>
          </Route>
          <Route
            path={path2}
            element={
              <Player
                dataMovies={movies}
              />
            }
          >
          </Route>
          <Route path={Mistake} element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
