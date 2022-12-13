import { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import ErrorMessage from '../error-message/error-message';
import { AppRoute, FeedbackData } from '../../const/const';
import { Movie } from '../../types/movies';
import { store } from '../../store/store';
import { loadingComment } from '../../store/api-actions';
import { useAppSelector } from '../../hooks/index';

type AddReviewProps = {
  dataMovies: Array<Movie>;
};

function AddReview({ dataMovies }: AddReviewProps): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const [addGrade, setGrade] = useState(0);
  const [addText, setText] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  const dataMovie = dataMovies.find(
    (movie) => movie.id.toString() === params.id
  );

  useEffect (() => {
    if (!dataMovie) {
      navigate(AppRoute.Mistake);
    }
  });

  const lockIndicator = useAppSelector((state) => state.isLoading);

  if (!dataMovie) {
    return;
  }

  const { backgroundImage, posterImage, name, id } = dataMovie;

  const changeBoolean = () => {
    if (addGrade !== 0 && (addText.length >= 50 || addText.length <= 400)) {
      setIsFormValid (false);
    } else {
      setIsFormValid (true);
    }
  };

  const addNamber = ({ target }: React.MouseEvent<HTMLInputElement>) => {
    const { value } = target;
    setGrade(value);
    changeBoolean();
  };

  const addReview = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = target;
    setText(value);
    changeBoolean();
  };

  const onSubmit = (feedbackData: FeedbackData) => {
    store.dispatch(loadingComment({
      feedbackData,
      id,
      navigate
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (addGrade !== 0 && addText !== '') {
      onSubmit({
        rating: addGrade,
        comment: addText,
      });
    }
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <ErrorMessage/>
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">
                  {name}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="*" className="breadcrumbs__link">
                  Add review
                </a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={AppRoute.Root} className="user-block__link">
                Sign out
              </Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleSubmit}>
          <div className="rating">
            <div className="rating__stars" onClick={addNamber}>
              <input
                className="rating__input"
                id="star-10"
                type="radio"
                name="rating"
                value="10"
                disabled={lockIndicator}
              />
              <label className="rating__label" htmlFor="star-10">
                Rating 10
              </label>

              <input
                className="rating__input"
                id="star-9"
                type="radio"
                name="rating"
                value="9"
                disabled={lockIndicator}
              />
              <label className="rating__label" htmlFor="star-9">
                Rating 9
              </label>

              <input
                className="rating__input"
                id="star-8"
                type="radio"
                name="rating"
                value="8"
                disabled={lockIndicator}
              />
              <label className="rating__label" htmlFor="star-8">
                Rating 8
              </label>

              <input
                className="rating__input"
                id="star-7"
                type="radio"
                name="rating"
                value="7"
                disabled={lockIndicator}
              />
              <label className="rating__label" htmlFor="star-7">
                Rating 7
              </label>

              <input
                className="rating__input"
                id="star-6"
                type="radio"
                name="rating"
                value="6"
                disabled={lockIndicator}
              />
              <label className="rating__label" htmlFor="star-6">
                Rating 6
              </label>

              <input
                className="rating__input"
                id="star-5"
                type="radio"
                name="rating"
                value="5"
                disabled={lockIndicator}
              />
              <label className="rating__label" htmlFor="star-5">
                Rating 5
              </label>

              <input
                className="rating__input"
                id="star-4"
                type="radio"
                name="rating"
                value="4"
                disabled={lockIndicator}
              />
              <label className="rating__label" htmlFor="star-4">
                Rating 4
              </label>

              <input
                className="rating__input"
                id="star-3"
                type="radio"
                name="rating"
                value="3"
                disabled={lockIndicator}
              />
              <label className="rating__label" htmlFor="star-3">
                Rating 3
              </label>

              <input
                className="rating__input"
                id="star-2"
                type="radio"
                name="rating"
                value="2"
                disabled={lockIndicator}
              />
              <label className="rating__label" htmlFor="star-2">
                Rating 2
              </label>

              <input
                className="rating__input"
                id="star-1"
                type="radio"
                name="rating"
                value="1"
                disabled={lockIndicator}
              />
              <label className="rating__label" htmlFor="star-1">
                Rating 1
              </label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="reviewText"
              id="review-text"
              value={addText}
              onChange={addReview}
              placeholder="Review text"
              disabled={lockIndicator}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={isFormValid || lockIndicator}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReview;
