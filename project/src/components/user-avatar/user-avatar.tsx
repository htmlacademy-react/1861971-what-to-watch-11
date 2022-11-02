import {Link} from 'react-router-dom';
import { AppRoute } from '../../const/const';

function UserAvatar(): JSX.Element {
  return (
    <>
      <Link to={AppRoute.List}>
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
      </Link>
      <li className="user-block__item">
        <a href='*' className="user-block__link">Sign Out</a>
      </li>
    </>
  );
}

export default UserAvatar;
