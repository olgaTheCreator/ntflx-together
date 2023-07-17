import { useState, useEffect } from 'react';
import axios from 'axios';
import { LovedMoviesPres } from './LovedMoviesPres';
import { useUserContext } from '../context/UserContext';
import { MovieCardProps } from './cards/MovieCard';
import { ButtonLoadMore } from './buttons/ButtonLoadMore';
import { http_url } from '../context/Url_back';
import { useParams } from 'react-router-dom';
import { AddFriendFirstCard } from './cards/AddFriendFirstCard';
import { Friend, FriendsState } from './FriendsContainer';

const fetchMotionPicture = (uuid_public: string, uuid_friend: string | undefined) =>
  axios.get(`${http_url}/watch-together/${uuid_public}/${uuid_friend}`);

export const WatchTogetherLovedContainer = (props: FriendsState) => {
  const { friends } = props;
  const [movies, setMovies] = useState<Array<MovieCardProps['movie']> | null>(null);
  const [loadMoreIndex, setLoadMoreIndex] = useState(10);
  const { uuid_public } = useUserContext();
  const params = useParams();

  const lastFriend = localStorage.getItem('last_friend');
  const storedFriend: Friend = lastFriend ? JSON.parse(lastFriend) : {};
  console.log(storedFriend);
  useEffect(() => {
    if (params.uuid_friend != undefined || Object.keys(storedFriend).length != 0) {
      fetchMotionPicture(uuid_public, params.uuid_friend == undefined ? storedFriend.uuid : params.uuid_friend)
        .then((response) => {
          setMovies(response.data.movies);
        })
        .catch((e) => console.log(e));
    }
  }, [params.uuid_friend]);

  const handleLoadMore = () => {
    setLoadMoreIndex((loadMoreIndex) => loadMoreIndex + 10);
  };

  console.log(movies);

  if (friends.length == 0 || Object.keys(storedFriend).length == 0) return <AddFriendFirstCard />;
  if (movies === null) return <></>;

  if (movies.length > 0) {
    return (
      <div className="flex w-full max-w-full flex-col justify-start md:mx-auto lg:max-w-4xl ">
        <div className="mx-5 mt-5 rounded bg-orange p-5 text-2xl font-semibold text-blue-500 lg:mx-0">
          Watch with <span className="underline underline-offset-2">{storedFriend['username']}</span>:
        </div>
        <LovedMoviesPres movies={movies.slice(0, loadMoreIndex)} />
        {loadMoreIndex < movies.length && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
      </div>
    );
  } else {
    return (
      <div className="mx-auto my-5 rounded bg-orange px-5 py-12 text-center text-3xl font-medium text-blue-500 lg:max-w-4xl">
        No movies you and {storedFriend.username} both want to watch. <p className="mt-3">Keep swiping!</p>
      </div>
    );
  }
};
