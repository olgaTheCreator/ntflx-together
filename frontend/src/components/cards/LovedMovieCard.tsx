import img from '../../assets/Netflix_Symbol.png';

export interface MovieCardProps {
  imdb_id: string;
  poster_url_780: string;
  title: string;
  media_type: 'series' | 'movie';
  season_count: number;
  children?: React.ReactNode;
}

export const LovedMovieCard = (props: MovieCardProps, key: string) => {
  const { children, poster_url_780, title, media_type, season_count, ...rest } = props;
  const showMedia = (mediaType: string) => {
    return mediaType === 'movie' ? <span>{mediaType} </span> : <span>Seasons: {season_count}</span>;
  };
  return (
    <>
      <div key={key} className="relative flex h-full flex-col overflow-hidden rounded p-2">
        {children}
        <div className="relative flex h-60 justify-center md:h-80">
          <img className="h-full object-cover object-center" src={poster_url_780} alt={title} />
          <img className=" absolute bottom-0 left-0 ml-1 max-h-10 object-scale-down" src={img} alt="Netflix logo" />
        </div>

        <div className="mt-1 flex h-24 justify-center align-middle text-white">
          <h1 className="pl-1 text-center text-xl font-semibold">{title}</h1>
        </div>
      </div>
    </>
  );
};
