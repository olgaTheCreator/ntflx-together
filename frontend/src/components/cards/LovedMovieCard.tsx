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

  const style: React.CSSProperties = {
    backgroundImage: `url(${poster_url_780})`,
  };
  return (
    //     <>
    //       {/* <div key={key} className="relative flex h-full overflow-hidden rounded px-2 py-2">
    //         {children} */}
    //       <div
    //         className="relative h-52 w-auto flex-none overflow-hidden rounded-t bg-cover text-center md:h-80 lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none"
    //         style={style}
    //         title={title}
    //       >
    //         {/* <img className="h-full object-cover object-center" src={poster_url_780} alt={title} /> */}
    //         <img className=" absolute bottom-0 left-0 ml-1 max-h-10 object-scale-down" src={img} alt="Netflix logo" />
    //       </div>

    //       <div className="mt-1 flex h-24 justify-center align-middle text-white">
    //         <h1 className="pl-1 text-center text-xl font-semibold">{title}</h1>
    //       </div>
    //       {/* </div> */}
    //     </>
    //   );
    // };
    <>
      <div className=" flex w-full max-w-sm p-3">
        <div
          className="relative ml-3 h-48 w-36 flex-none overflow-hidden rounded-t bg-cover bg-center text-center lg:h-64 lg:w-48 lg:rounded-l lg:rounded-t-none"
          style={{ backgroundImage: `url(${poster_url_780})` }}
          title={title}
        >
          {' '}
          <img className=" absolute bottom-0 left-0 ml-1 max-h-10 object-scale-down" src={img} alt="Netflix logo" />
        </div>
        <div className="flex w-1/2 flex-col justify-between px-2 leading-normal">
          <div className="h-24 justify-center overflow-x-hidden font-poppins text-white">
            <h1 className="break-words pl-1 text-left text-xl font-medium">{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
