import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { LovedMoviesPres } from './LovedMoviesPres';
import { useUserContext } from '../context/UserContext';
import { MovieCardProps } from './cards/MovieCard';
import { ButtonLoadMore } from './buttons/ButtonLoadMore';
import { http_url } from '../context/Url_back';
import { useParams } from 'react-router-dom';
import { AddFriendFirstCard } from './cards/AddFriendFirstCard';
import { FriendsState } from './FriendsContainer';

const fetchMotionPicture = (uuid_public: string, uuid_friend: string | undefined) =>
  axios.get(`${http_url}/watch-together/${uuid_public}/${uuid_friend}`);

export const WatchTogetherLovedContainer = (props: FriendsState) => {
  const { friends } = props;
  const [movies, setMovies] = useState<Array<MovieCardProps['movie']> | null>(null);
  const [loadMoreIndex, setLoadMoreIndex] = useState(10);
  const { uuid_public } = useUserContext();
  const params = useParams();

  useEffect(() => {
    if (friends && friends.length > 0)
      fetchMotionPicture(uuid_public, params.uuid_friend == undefined ? friends[0].uuid : params.uuid_friend)
        // fetchMotionPicture(uuid_public, uuid_friend)
        .then((response) => {
          setMovies(response.data.movies);
        })
        .catch((e) => console.log(e));
  }, [friends]);

  const handleLoadMore = () => {
    setLoadMoreIndex((loadMoreIndex) => loadMoreIndex + 10);
  };

  console.log(movies);

  if (friends.length == 0) return <AddFriendFirstCard />;
  if (movies === null) return <></>;

  if (movies.length > 0) {
    return (
      <div className="flex flex-col justify-start justify-items-center">
        <div className="mx-5 mt-5 rounded bg-orange p-5 text-2xl font-semibold text-blue-500">
          Watch with <span className="underline underline-offset-2">{friends[0].username}</span>:
        </div>
        <LovedMoviesPres movies={movies.slice(0, loadMoreIndex)} />
        {loadMoreIndex < movies.length && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
      </div>
    );
  } else {
    return (
      <div className="m-5 rounded bg-orange p-5 px-5 py-12 text-center text-3xl font-medium text-blue-500">
        No movies you and {friends[0].username} both want to watch. <p className="mt-3">Keep swiping!</p>
      </div>
    );
  }
};
