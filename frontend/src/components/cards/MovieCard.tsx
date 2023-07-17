import img from '../../assets/Netflix_Symbol.png';
import { SwipeButtonGroup } from '../buttons/SwipeButtonsGroup';
import { ButtonPlay } from '../buttons/ButtonPlay';
import { useSwipeable } from 'react-swipeable';

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
  const showMedia = (mediaType: string) => {
    return mediaType === 'movie' ? <span>{mediaType} </span> : <span>Seasons: {season_count}</span>;
  };
  const titleArray = title.split(' ');
  const title_h1 = titleArray.slice(0, 2).join(' ');
  const title_h2 = titleArray.slice(2).join(' ');

  const handlers = useSwipeable({
    onSwipedRight: handleSwipe('yes'),
    onSwipedLeft: handleSwipe('no'),
  });
  return (
    <>
      <div className="relative m-5 flex h-9/10 flex-col lg:mx-auto lg:my-5 lg:w-1/2 2xl:w-full 2xl:max-w-2xl 2xl:items-center">
        <div
          {...handlers}
          style={{ touchAction: 'pan-x' }}
          className="relative h-4/5 md:h-7/8 lg:h-full lg:w-full 2xl:max-w-lg"
        >
          <img
            className="rounded-md object-bottom md:object-cover lg:object-contain "
            src={poster_url_780}
            alt={title}
          />
          <div className="absolute top-0 h-1/3 w-full  bg-gradient-to-b from-black opacity-50 "></div>
          <SwipeButtonGroup handleSwipe={handleSwipe} />
        </div>

        <div className="mt-5 flex h-32 justify-start py-4 text-white 2xl:w-full">
          <img className="mr-5 max-h-20 basis-3/4 object-scale-down" src={img} alt="Netflix logo" />
          <div className="h-full basis-1/2 pl-1">
            <h1 className="text-3xl font-semibold">{title_h1}</h1>
            <p className="mt-2 line-clamp-2 text-2xl font-semibold">{title_h2}</p>
          </div>
        </div>
        <div className="flex items-center justify-end  divide-x-2 divide-white pb-4 text-white 2xl:w-full">
          <form action={link} method="get">
            <ButtonPlay />
          </form>
          <h2 className="pl-4 pr-2 text-lg text-white">{showMedia(media_type)}</h2>
        </div>
      </div>
    </>
  );
};
