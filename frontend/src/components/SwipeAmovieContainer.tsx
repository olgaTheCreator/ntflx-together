import useSWR from 'swr';
import axios from 'axios';
import { SwipeAmoviePres } from './SwipeAmoviePres';
import { useUserContext } from '../context/Context';

const fetchMotionPicture = (url: string) => axios.get(`http://0.0.0.0:3000/users/${url}`).then((res) => res.data);

export const SwipeAmovieContainer = () => {
  const { uuid_public } = useUserContext();

  const { data, error, isLoading } = useSWR(uuid_public, fetchMotionPicture);
  if (error) {
    return error;
  }
  if (isLoading) return <>Is Loading</>;

  return <SwipeAmoviePres data={data.movie} />;
};
