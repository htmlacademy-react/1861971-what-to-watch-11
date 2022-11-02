import {Link} from 'react-router-dom';
import { AppRoute } from '../../const/const';

type PlayButtonProps = {
  id: number;
};

function PlayButton({id}: PlayButtonProps): JSX.Element {
  const path = `${AppRoute.View}${id.toString ()}`;
  return (

    <button className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <Link to = {path}><use xlinkHref="#play-s"></use></Link>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
