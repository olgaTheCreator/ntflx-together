import { ButtonNavSwipe } from './buttons/ButtonNavSwipe';
import { LovedMovieCard, MovieCardProps } from './cards/LovedMovieCard';
import { NavLink } from 'react-router-dom';

interface SwipeAmovieProps {
  movies: MovieCardProps[];
}
export const LovedMoviesPres = ({ movies }: SwipeAmovieProps) => {
  console.log(movies.length);
  if (movies.length > 0) {
    return (
      <div className="align-center mb-14 mt-4 flex w-full flex-wrap content-center justify-center">
        {movies.map((movie) => (
          // <div className="relative flex w-full max-w-xs">
          <LovedMovieCard key={movie.imdb_id} {...movie} />
          // </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="mx-auto mt-5 w-full max-w-xs rounded bg-orange px-5 py-16">
        <h1 className="text-center text-3xl font-medium text-blue-500">Start from swiping some movies</h1>
        <div className="mt-5 text-info-500">
          <NavLink to="/./">
            <ButtonNavSwipe />
          </NavLink>
        </div>
      </div>
    );
  }
};
