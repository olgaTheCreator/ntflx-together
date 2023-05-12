import { LovedMovieCard, MovieCardProps } from './cards/LovedMovieCard';

interface SwipeAmovieProps {
  movies: MovieCardProps[];
}
export const LovedMoviesPres = ({ movies }: SwipeAmovieProps) => {
  return (
    <div className="align-center mt-4 flex w-full flex-wrap content-center justify-center">
      {movies.map((movie) => (
        <div className="h-85 flex w-1/2 max-w-xs justify-center">
          <LovedMovieCard key={movie.imdb_id} {...movie} />
        </div>
      ))}
    </div>
  );
};
