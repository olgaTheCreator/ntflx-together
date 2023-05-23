import { MovieCard, MovieCardProps } from './cards/MovieCard';

export const SwipeAmoviePres = (props: MovieCardProps) => {
  return (
    <div className="mx-auto w-full max-w-md">
      <MovieCard {...props} />
    </div>
  );
};
