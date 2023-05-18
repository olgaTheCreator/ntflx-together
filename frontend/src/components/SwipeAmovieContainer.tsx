import useSWR from 'swr';
import axios from 'axios';
import { SwipeAmoviePres } from './SwipeAmoviePres';
import { useUserContext } from '../context/Context';

const fetchMotionPicture = (url: string) => axios.get(`http://0.0.0.0:3000/users/${url}`).then((res) => res.data);

const swipeMovie = (uuid_public: string, imdb_id: string, liked: 'yes' | 'no') => {
  return axios.post(
    `http://0.0.0.0:3000/imdb_id`,
    { uuid: uuid_public, imdb_id: imdb_id, liked: liked },
    { headers: { 'Content-Type': 'application/json' } },
  );
};

export const SwipeAmovieContainer = () => {
  const { uuid_public } = useUserContext();
  const { data, error, isLoading } = useSWR(uuid_public != undefined ? uuid_public : 'single', fetchMotionPicture);
  const handleSwipe = (liked: 'yes' | 'no') => async () => {
    try {
      const response = await swipeMovie(uuid_public, data.movie.imdb_id, liked);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return error;
  }
  if (isLoading) return <>Is Loading</>;

  return <SwipeAmoviePres movie={data.movie} handleSwipe={handleSwipe} />;
};
