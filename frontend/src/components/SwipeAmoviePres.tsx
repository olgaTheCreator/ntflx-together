import { MovieCard, MovieCardProps } from './cards/MovieCard';

export const SwipeAmoviePres = (props: MovieCardProps) => {
  return (
    <div className="mx-auto w-full md:max-w-xl">
      <MovieCard {...props} />
    </div>
  );
};
