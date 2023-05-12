import { LovedMovieCard, MovieCardProps } from './cards/LovedMovieCard';

interface SwipeAmovieProps {
  movies: MovieCardProps[];
}
export const LovedMoviesPres = ({ movies }: SwipeAmovieProps) => {
  return (
    <div className="align-center mb-14 mt-4 flex w-full flex-wrap content-center justify-center">
      {movies.map((movie) => (
        // <div className="relative flex w-full max-w-xs">
        <LovedMovieCard key={movie.imdb_id} {...movie} />
        // </div>
      ))}
    </div>
  );
};
