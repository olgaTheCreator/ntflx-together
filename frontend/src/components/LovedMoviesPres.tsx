import { ButtonNavSwipe } from './buttons/ButtonNavSwipe';
import { LovedMovieCard, MovieCardProps } from './cards/LovedMovieCard';
import { NavLink } from 'react-router-dom';

interface SwipeAmovieProps {
  movies: MovieCardProps[];
}
export const LovedMoviesPres = ({ movies }: SwipeAmovieProps) => {
  return (
    <div className="align-center mb-14 mt-4 flex w-full flex-wrap content-center justify-between ">
      {movies.map((movie) => (
        // <div className="relative flex w-full max-w-xs">
        <LovedMovieCard key={movie.imdb_id} {...movie} />
        // </div>
      ))}
    </div>
  );
};
