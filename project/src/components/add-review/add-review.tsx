import {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const/const';


type Data = {
  index: number;
  image: string;
  movieTitle: string;
};

type AddReviewProps = {
  dataMovies:Array<Data>;
};


function AddReview ({dataMovies}: AddReviewProps): JSX.Element {
  const params = useParams();
  const [addReviewForm, getFeedback] = useState ({
    rating: 0,
    reviewText: ''
  });

  const addReview = (evt: object) => {
    const {name, value} = evt.target;
    getFeedback ({...addReviewForm, [name]: value});
  };


  const updateStateHandle = () => {
    getFeedback ({
      rating: 0,
      reviewText: ''
    });
  };

  let dataMovie = dataMovies.find((movie) => movie.index.toString() === params.id);
  if (!dataMovie) {
    dataMovie = {
      index: 0,
      image: 'img/aviator.jpg',
      movieTitle: 'Non-existent page. Go to main page. Please click Sign out'
    };
  }

  const {image, movieTitle} = dataMovie;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src= {image} alt= {movieTitle} />
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
                <a href="film-page.html" className="breadcrumbs__link">{movieTitle}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="*" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to = {AppRoute.Root} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src= {image} alt= {movieTitle} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-10" type="radio" onClick={addReview} name="rating" value="10" />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" onClick={addReview} name="rating" value="9" />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" onClick={addReview} name="rating" value="8" />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" onClick={addReview} name="rating" value="7" />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" onClick={addReview} name="rating" value="6" />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" onClick={addReview} name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" onClick={addReview} name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" onClick={addReview} name="rating" value="3" />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" onClick={addReview} name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" onClick={addReview} name="rating" value="1" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="reviewText" id="review-text"
              onChange={addReview} placeholder="Review text"
            >{addReviewForm.reviewText}
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" onClick={updateStateHandle}>Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default AddReview;
