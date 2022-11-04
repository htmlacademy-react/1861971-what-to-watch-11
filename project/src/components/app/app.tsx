import MainPage from '../../pages/main-page/main-page';
import MyList from '../../components/my-list/my-list';
import SignIn from '../sign-in/sign-in';
import Film from '../film/film';
import PrivateRoute from '../private-route/private-route';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Error from '../error/error';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Data, DataMovies } from '../../types/movies';

type AppProps = {
  dataMovies: Array<Data>;
  movieDescriptionAndTitle: DataMovies;
};

function App({dataMovies, movieDescriptionAndTitle}: AppProps): JSX.Element {
  const {Root,Login,List,Films,Review,View,Mistake} = AppRoute;
  const path1 = `:id${Review}`;
  const path2 = `${View}:id`;
  const status = AuthorizationStatus.Auth;
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {Root}>
          <Route index element={<MainPage dataMovies = {dataMovies} movieDescriptionAndTitle = {movieDescriptionAndTitle} authorizationStatus = {status}/>}>
          </Route>
          <Route path = {Login} element={<SignIn />}></Route>
          <Route path = {List} element={<MyList />}></Route>
          <Route path = {Films}>
            <Route path = ':id' element={<Film dataMovies={dataMovies} />}></Route>
            <Route path ={path1}
              element={
                <PrivateRoute
                  authorizationStatus = {status}
                >
                  <AddReview dataMovies = {dataMovies} />
                </PrivateRoute>
              }
            >
            </Route>
          </Route>
          <Route path = {path2} element={<Player dataMovies = {dataMovies} movieDescriptionAndTitle = {movieDescriptionAndTitle}/>}></Route>
          <Route path = {Mistake} element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
