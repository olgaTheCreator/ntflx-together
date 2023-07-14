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
import { Friend, FriendsState } from './FriendsContainer';

const fetchMotionPicture = (uuid_public: string, uuid_friend: string | undefined) =>
  axios.get(`${http_url}/watch-together/${uuid_public}/${uuid_friend}`);

export const WatchTogetherLovedContainer = (props: FriendsState) => {
  const { friends } = props;
  const [movies, setMovies] = useState<Array<MovieCardProps['movie']> | null>(null);
  const [loadMoreIndex, setLoadMoreIndex] = useState(10);
  const { uuid_public } = useUserContext();
  const params = useParams();

const lastFriend = localStorage.getItem("last_friend")
const storedFriend: Friend = lastFriend? JSON.parse(lastFriend): {} 
console.log(storedFriend)
  useEffect(() => {
    
    if (params.uuid_friend != undefined || Object.keys(storedFriend).length!=0){
      fetchMotionPicture(uuid_public, params.uuid_friend == undefined ? storedFriend.uuid : params.uuid_friend)
        // fetchMotionPicture(uuid_public, uuid_friend)
        .then((response) => {
          setMovies(response.data.movies);
        })
        .catch((e) => console.log(e));
  }}, [params.uuid_friend]);

  const handleLoadMore = () => {
    setLoadMoreIndex((loadMoreIndex) => loadMoreIndex + 10);
  };

  console.log(movies);

  if (friends.length == 0 || Object.keys(storedFriend).length==0 ) return <AddFriendFirstCard />;
  if (movies === null) return <></>;

  if (movies.length > 0) {
    return (
      <div className="flex flex-col lg:max-w-3xl w-full md:mx-auto justify-start justify-items-center">
        <div className="mx-5 md:mx-0 mt-5 w-full rounded bg-orange p-5 text-2xl font-semibold text-blue-500">
          Watch with <span className="underline underline-offset-2">
            {storedFriend["username"]}
            </span>:
        </div>
        <LovedMoviesPres movies={movies.slice(0, loadMoreIndex)} />
        {loadMoreIndex < movies.length && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
      </div>
    );
  } else {
    return (
      <div className="mx-auto my-5 lg:max-w-3xl rounded bg-orange px-5 py-12 text-center text-3xl font-medium text-blue-500">
        No movies you and {storedFriend.username} both want to watch. <p className="mt-3">Keep swiping!</p>
      </div>
    );
  }
};
