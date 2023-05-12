import img from '../../assets/Netflix_Symbol.png';

export interface MovieCardProps {
  imdb_id: string;
  poster_url_780: string;
  title: string;
  media_type: 'series' | 'movie';
  season_count: number;
  children?: React.ReactNode;
}

export const MovieCard = (props: MovieCardProps) => {
  const { children, poster_url_780, title, media_type, season_count, ...rest } = props;
  const showMedia = (mediaType: string) => {
    return mediaType === 'movie' ? <span>{mediaType} </span> : <span>Seasons: {season_count}</span>;
  };
  return (
    <>
      <div className="relative m-5 flex flex-col overflow-hidden rounded">
        {children}
        <img className="h-auto max-w-full" src={poster_url_780} alt={title} />

        <div className="mt-5 flex h-32 justify-start py-4 text-white">
          <img className="mr-5 max-h-20 basis-3/4 object-scale-down" src={img} alt="Netflix logo" />
          <h1 className="basis-1/2 pl-1 text-3xl font-semibold">{title}</h1>
        </div>
        <div>
          <h2 className="mb-8 text-right  text-lg text-white">{showMedia(media_type)}</h2>
        </div>
      </div>
    </>
  );
};