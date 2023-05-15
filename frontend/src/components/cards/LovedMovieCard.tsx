import img from '../../assets/Netflix_Symbol.png';
import { ButtonPlay } from '../buttons/ButtonPlay';
import { ButtonShare } from '../buttons/ButtonShare';

export interface MovieCardProps {
  imdb_id: string;
  poster_url_780: string;
  link: string;
  title: string;
  media_type: 'series' | 'movie';
  season_count: number;
  children?: React.ReactNode;
}

export const LovedMovieCard = (props: MovieCardProps, key: string) => {
  const { poster_url_780, link, title, media_type, season_count, ...rest } = props;

  return (
    <>
      <div key={key} className=" flex w-full max-w-sm p-3">
        <div
          className="relative ml-3 h-48 w-36 flex-none overflow-hidden rounded-md bg-cover bg-center text-center lg:h-64 lg:w-48 lg:rounded-l lg:rounded-t-none"
          style={{ backgroundImage: `url(${poster_url_780})` }}
          title={title}
        >
          {' '}
          <img className=" absolute left-0 top-0 ml-1 max-h-10 object-scale-down" src={img} alt="Netflix logo" />
        </div>
        <div className="flex w-1/2 flex-col justify-between px-2 leading-normal">
          <div className="h-fulljustify-center overflow-x-hidden text-white">
            <h1 className="break-words pl-1 text-left text-xl font-medium">{title}</h1>
          </div>
          <div className="flex h-11 place-self-end text-white">
            <form action={link} method="get">
              <ButtonPlay />
            </form>
            <ButtonShare />
          </div>
        </div>
      </div>
    </>
  );
};
