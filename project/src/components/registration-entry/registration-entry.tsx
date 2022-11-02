import {Link} from 'react-router-dom';
import { AppRoute } from '../../const/const';

function RegistrationEntry(): JSX.Element {
  return (
    <li className="user-block__item">
      <Link to = {AppRoute.Login} className="user-block__link">Sign Out</Link>
    </li>
  );
}

export default RegistrationEntry;
