import useSWR from 'swr';
import axios from 'axios';
import { SwipeAmoviePres } from './SwipeAmoviePres';
import { useUserContext } from '../context/Context';
import { useEffect, useState } from 'react';
import { MovieCardProps } from './cards/MovieCard';

const fetchMotionPicture = (url: string) => axios.get(`http://0.0.0.0:3000/users/${url}`).then((res) => res.data);

const swipeMovie = (uuid_public: string, imdb_id: string, liked: 'yes' | 'no') => {
  return axios.post(
    `http://0.0.0.0:3000/imdb_id`,
    { uuid_public: uuid_public, imdb_id: imdb_id, liked: liked },
    { headers: { 'Content-Type': 'application/json' } },
  );
};

export const SwipeAmovieContainer = () => {
  const { uuid_public } = useUserContext();
  const [movie, setMovie] = useState<MovieCardProps['movie'] | null>(null);
  const { data, error, isLoading } = useSWR(uuid_public != undefined ? uuid_public : 'single', fetchMotionPicture);
  useEffect(() => (data ? setMovie(data.movie) : undefined), [data]);
  const handleSwipe = (liked: 'yes' | 'no') => async () => {
    try {
      if (movie) {
        const response = await swipeMovie(uuid_public, movie.imdb_id, liked);
        if (response.data.movie) setMovie(response.data.movie);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return error;
  }
  if (isLoading || !movie) return <>Is Loading</>;

  return <SwipeAmoviePres movie={movie} handleSwipe={handleSwipe} />;
};
