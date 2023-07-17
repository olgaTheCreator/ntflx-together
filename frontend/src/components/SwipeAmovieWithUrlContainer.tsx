import axios from 'axios';
import { SwipeAmoviePres } from './SwipeAmoviePres';
import { useUserContext } from '../context/UserContext';
import { useEffect, useState } from 'react';
import { MovieCardProps } from './cards/MovieCard';
import { useParams, useNavigate } from 'react-router-dom';
import { http_url } from '../context/Url_back';

const fetchMotionPicture = (imdb_id: string | undefined) => axios.get(`${http_url}/movie/${imdb_id}`);

const swipeMovie = (uuid_public: string, imdb_id: string, liked: 'yes' | 'no') => {
  return axios.post(
    `${http_url}/imdb_id`,
    { uuid_public: uuid_public, imdb_id: imdb_id, liked: liked },
    { headers: { 'Content-Type': 'application/json' } },
  );
};

export const SwipeAmovieWithUrlContainer = () => {
  const { uuid_public } = useUserContext();
  const [movie, setMovie] = useState<MovieCardProps['movie'] | null>(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetchMotionPicture(params.imdb_id)
      .then((response) => {
        setMovie(response.data.movie);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleSwipe = (liked: 'yes' | 'no') => async () => {
    try {
      if (movie) {
        const response = await swipeMovie(uuid_public, movie.imdb_id, liked);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!movie) return null;

  return <SwipeAmoviePres movie={movie} handleSwipe={handleSwipe} />;
};
