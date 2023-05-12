import { MovieCard, MovieCardProps } from './cards/MovieCard';

interface SwipeAmovieProps {
  data: MovieCardProps;
}
export const SwipeAmoviePres = ({ data }: SwipeAmovieProps) => {
  return (
    <>
      <div className="mx-auto max-w-md">
        <MovieCard {...data} />
      </div>
    </>
  );
};
