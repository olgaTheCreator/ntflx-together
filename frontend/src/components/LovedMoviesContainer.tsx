import useSWR from 'swr';
import axios from 'axios';
import { LovedMoviesPres } from './LovedMoviesPres';

const fetchMotionPicture = (url: string) => axios.get(`http://0.0.0.0:3000/${url}`).then((res) => res.data);

export const LovedMoviesContainer = () => {
  const { data, error, isLoading } = useSWR('loved', fetchMotionPicture);
  if (error) {
    return error;
  }
  if (isLoading) return <>Is Loading</>;

  return <LovedMoviesPres movies={data.movies} />;
};
