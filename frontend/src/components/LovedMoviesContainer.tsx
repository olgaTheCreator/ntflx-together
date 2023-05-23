import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { LovedMoviesPres } from './LovedMoviesPres';
import { useUserContext } from '../context/Context';
import { MovieCardProps } from './cards/MovieCard';
import { ButtonLoadMore } from './buttons/ButtonLoadMore';
import { http_url } from '../context/Url';

const fetchMotionPicture = (url: string) => axios.get(`${http_url}/loved/${url}`);
// .then((res) => {
//   console.log('data sent');
//   // return res.data;
// });

export const LovedMoviesContainer = () => {
  const [movies, setMovies] = useState<MovieCardProps['movie'][]>([]);
  const [loadMoreIndex, setLoadMoreIndex] = useState(10);

  const { uuid_public } = useUserContext();
  useEffect(() => {
    fetchMotionPicture(uuid_public)
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((e) => console.log(e));
  }, []);
  // const { data, error, isLoading } = useSWR(uuid_public, fetchMotionPicture);
  const handleLoadMore = () => {
    setLoadMoreIndex((loadMoreIndex) => loadMoreIndex + 10);
  };

  // useEffect(
  //   () =>
  //     data
  //       ? setMovies(response.data.movies)
  //       : // setLoadMore({ length: movies.length, hasMore: movies.length > 10 ? true : false, currentIndex: 0 }))
  //         undefined,
  //   [data],
  // );
  // useEffect(
  //   () =>
  //     data
  //       ? setLoadMore({ length: movies.length, hasMore: movies.length > loadMore.currentIndex ? true : false, currentIndex: 10 })
  //       : undefined,
  //   [movies],
  // );
  console.log(movies);
  // movies {
  //   length
  //   hasmore?
  // // }
  // if (error) {
  //   return error;
  // }
  // if (isLoading || !data.movies || movies == undefined) return <>Is Loading</>;

  return (
    <div className="flex flex-col justify-start justify-items-center">
      <LovedMoviesPres movies={movies.slice(0, loadMoreIndex)} />
      {loadMoreIndex < movies.length && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
    </div>
  );
};
