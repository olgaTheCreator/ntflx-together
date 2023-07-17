import { useState, useEffect } from 'react';
import axios from 'axios';
import { LovedMoviesPres } from './LovedMoviesPres';
import { useUserContext } from '../context/UserContext';
import { MovieCardProps } from './cards/MovieCard';
import { ButtonLoadMore } from './buttons/ButtonLoadMore';
import { http_url } from '../context/Url_back';
import { StartFromSwipingCard } from './cards/StartFromSwipingCard';

const fetchMotionPicture = (url: string) => axios.get(`${http_url}/loved/${url}`);

type Movies = Array<MovieCardProps['movie']>;
type Maybe<T> = T | null;

export const LovedMoviesContainer = () => {
  const [movies, setMovies] = useState<Maybe<Movies>>(null);
  const [loadMoreIndex, setLoadMoreIndex] = useState(10);

  const { uuid_public } = useUserContext();
  useEffect(() => {
    fetchMotionPicture(uuid_public)
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((e) => console.log(e));
  }, []);
  const handleLoadMore = () => {
    setLoadMoreIndex((loadMoreIndex) => loadMoreIndex + 10);
  };

  if (movies === null) return <></>;

  if (movies.length > 0) {
    return (
      <div className="flex flex-col justify-start justify-items-center md:mx-auto lg:max-w-4xl">
        <LovedMoviesPres movies={movies.slice(0, loadMoreIndex)} />
        {loadMoreIndex < movies.length && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
      </div>
    );
  } else {
    return <StartFromSwipingCard />;
  }
};
