import img from '../../assets/Netflix_Symbol.png';
import { SwipeButtonGroup } from '../buttons/SwipeButtonsGroup';
import { ButtonPlay } from '../buttons/ButtonPlay';

export interface MovieCardProps {
  movie: {
    imdb_id: string;
    poster_url_780: string;
    title: string;
    link: string;
    media_type: 'series' | 'movie';
    season_count: number;
  };
  handleSwipe: (liked: 'yes' | 'no') => () => Promise<void>;
  children?: React.ReactNode;
}

export const MovieCard = (props: MovieCardProps) => {
  const {
    movie: { poster_url_780, link, title, media_type, season_count },
    handleSwipe,
  } = props;
  // {poster_url_780, link, title, media_type, season_count} = movie
  const showMedia = (mediaType: string) => {
    return mediaType === 'movie' ? <span>{mediaType} </span> : <span>Seasons: {season_count}</span>;
  };
  return (
    <>
      <div className="relative m-5 flex h-5/6 flex-col">
        <div className="relative max-h-fit ">
          <img className="rounded-md object-scale-down" src={poster_url_780} alt={title} />
          <div className="absolute top-0 h-4/5 w-full  bg-gradient-to-b from-black opacity-40 "></div>
          <SwipeButtonGroup handleSwipe={handleSwipe} />
        </div>

        <div className="mt-5 flex h-32 justify-start py-4 text-white">
          <img className="mr-5 max-h-20 basis-3/4 object-scale-down" src={img} alt="Netflix logo" />
          <h1 className="basis-1/2 pl-1 text-3xl font-semibold">{title}</h1>
        </div>
        <div className="flex items-center justify-end divide-x-2 divide-white pb-4 text-white">
          <form action={link} method="get">
            <ButtonPlay />
          </form>
          <h2 className="pl-4 pr-2 text-lg text-white">{showMedia(media_type)}</h2>
        </div>
      </div>
    </>
  );
};
