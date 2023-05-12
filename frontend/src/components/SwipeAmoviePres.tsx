import { MovieCard, MovieCardProps } from './cards/MovieCard';
import { SwipeButtonGroup } from './buttons/SwipeButtonsGroup';

interface SwipeAmovieProps {
  data: MovieCardProps;
}
export const SwipeAmoviePres = ({ data }: SwipeAmovieProps) => {
  return (
    <>
      <div className="h-screen max-h-screen max-w-md">
        <div className="flex justify-center">
          <MovieCard {...data}>
            {' '}
            <SwipeButtonGroup />
          </MovieCard>
        </div>
      </div>
    </>
  );
};
