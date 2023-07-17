import { MovieCard, MovieCardProps } from './cards/MovieCard';

export const SwipeAmoviePres = (props: MovieCardProps) => {
  return (
    <div className="mx-auto w-full md:max-w-xl lg:max-w-4xl max-h-screen">
      <MovieCard {...props} />
    </div>
  );
};
