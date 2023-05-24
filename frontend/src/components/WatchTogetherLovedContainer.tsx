import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { LovedMoviesPres } from './LovedMoviesPres';
import { useUserContext } from '../context/Context';
import { MovieCardProps } from './cards/MovieCard';
import { ButtonLoadMore } from './buttons/ButtonLoadMore';
import { http_url } from '../context/Url';
import { useParams } from 'react-router-dom';

const fetchMotionPicture = (uuid_public: string, uuid_friend: string | undefined) => axios.get(`${http_url}/lwatch-together/${uuid_public}/${uuid_friend}`);


export const WatchTogetherLovedContainer = () => {
  const [movies, setMovies] = useState<MovieCardProps['movie'][]>([]);
  const [loadMoreIndex, setLoadMoreIndex] = useState(10);
    const { uuid_public } = useUserContext();
    const params = useParams()
  useEffect(() => {
    fetchMotionPicture(uuid_public, params.uuid_friend)
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((e) => console.log(e));
  }, []);
  // const { data, error, isLoading } = useSWR(uuid_public, fetchMotionPicture);
  const handleLoadMore = () => {
    setLoadMoreIndex((loadMoreIndex) => loadMoreIndex + 10);
  };


  console.log(movies);


  return (
    <div className="flex flex-col justify-start justify-items-center">
      <LovedMoviesPres movies={movies.slice(0, loadMoreIndex)} />
      {loadMoreIndex < movies.length && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
    </div>
  );
};
