import useSWR from 'swr';
import axios from 'axios';
import { SwipeAmoviePres } from './SwipeAmoviePres';
import { useUserContext } from '../context/Context';
import { useEffect, useState } from 'react';
import { MovieCardProps } from './cards/MovieCard';
import { useParams, useNavigate } from 'react-router-dom';

// interface SwipeAMovieContainerProps {
//   imdb_id: string | undefined;
// }

const fetchMotionPicture = (imdb_id: string | undefined) => axios.get(`http://0.0.0.0:3000/movie/${imdb_id}`);
// .then((res) => res.data);

const swipeMovie = (uuid_public: string, imdb_id: string, liked: 'yes' | 'no') => {
  return axios.post(
    `http://0.0.0.0:3000/imdb_id`,
    { uuid_public: uuid_public, imdb_id: imdb_id, liked: liked },
    { headers: { 'Content-Type': 'application/json' } },
  );
};

export const SwipeAmovieWithUrlContainer = () => {
  const { uuid_public } = useUserContext();
  const [movie, setMovie] = useState<MovieCardProps['movie'] | null>(null);
  const navigate = useNavigate();
  const params = useParams();
  // const { data, error, isLoading } = useSWR(uuid_public != undefined ? uuid_public : 'single', fetchMotionPicture);
  useEffect(() => {
    fetchMotionPicture(params.imdb_id)
      .then((response) => {
        setMovie(response.data.movie);
      })
      .catch((e) => console.log(e));
  }, []);
  // useEffect(() => (data ? setMovie(data.movie) : undefined), [data]);
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

  // if (error) {
  //   return error;
  // }
  // if (isLoading || !movie) return <>Is Loading</>;
  if (!movie) return null;

  return <SwipeAmoviePres movie={movie} handleSwipe={handleSwipe} />;
};
