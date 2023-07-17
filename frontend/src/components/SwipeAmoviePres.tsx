import { MovieCard, MovieCardProps } from './cards/MovieCard';

export const SwipeAmoviePres = (props: MovieCardProps) => {
  return (
    <div className="mx-auto max-h-screen w-full md:max-w-xl lg:max-w-4xl">
      <MovieCard {...props} />
    </div>
  );
};
