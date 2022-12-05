import Details from '../details/details';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';
import { Tab } from '../../const/const';
import { Movie } from '../../types/movies';

type TabListProps = {
  type: string;
  movie: Movie;
};

function TabList({ type, movie }: TabListProps): JSX.Element {
  const getComponentByType = () => {
    switch (type) {
      case Tab.Overview:
        return <Overview movie={movie}/>;
      case Tab.Details:
        return <Details movie={movie}/>;
      case Tab.Reviews:
        return <Reviews movie={movie}/>;
    }
  };

  return <>{getComponentByType()}</>;
}

export default TabList;
