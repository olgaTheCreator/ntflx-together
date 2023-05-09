import { MovieCard, MovieCardProps } from './cards/MovieCard';
import { SwipeButtonGroup } from './buttons/SwipeButtonsGroup';

interface SwipeAmovieProps {
  data: MovieCardProps;
}
export const SwipeAmoviePres = ({ data }: SwipeAmovieProps) => {
  return (
    <>
      <MovieCard {...data}>
        {' '}
        <SwipeButtonGroup />
      </MovieCard>
    </>
  );
};
