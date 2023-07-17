import axios from 'axios';
import { SwipeAmoviePres } from './SwipeAmoviePres';
import { useUserContext } from '../context/UserContext';
import { useEffect, useState } from 'react';
import { MovieCardProps } from './cards/MovieCard';
import { http_url } from '../context/Url_back';

const fetchMotionPicture = (url: string) => axios.get(`${http_url}/users/${url}`);

const swipeMovie = (uuid_public: string, imdb_id: string, liked: 'yes' | 'no') => {
  return axios.post(
    `${http_url}/imdb_id`,
    { uuid_public: uuid_public, imdb_id: imdb_id, liked: liked },
    { headers: { 'Content-Type': 'application/json' } },
  );
};

export const SwipeAmovieContainer = () => {
  const { uuid_public } = useUserContext();
  const [movie, setMovie] = useState<MovieCardProps['movie'] | null>(null);
  useEffect(() => {
    fetchMotionPicture(uuid_public)
      .then((response) => {
        setMovie(response.data.movie);
      })
      .catch((e) => console.log(e));
  }, []);
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

  if (!movie) return null;

  return <SwipeAmoviePres movie={movie} handleSwipe={handleSwipe} />;
};
