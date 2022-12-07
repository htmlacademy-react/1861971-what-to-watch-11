import { useState } from 'react';
import UserFeedback from '../user-feedback/user-feedback';
import { fetchComments } from '../../store/api-actions';
import { store } from '../../store/store';
import { Movie } from '../../types/movies';
import { useAppSelector } from '../../hooks/index';


type ReviewsProps = {
  movie: Movie;
};

function Reviews({movie}: ReviewsProps): JSX.Element {
  const [addIndex, setIndex] = useState(0);
  const {id} = movie;

  if(id !== addIndex) {
    store.dispatch(fetchComments(id));
    setIndex(id);
  }

  const comments = useAppSelector((state) => state.comments);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) =>(
          <UserFeedback key={comment.id.toString()} dataComment={comment}/>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
