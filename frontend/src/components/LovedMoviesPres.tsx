import { LovedMovieCard, MovieCardProps } from './cards/LovedMovieCard';

interface SwipeAmovieProps {
  movies: MovieCardProps[];
}
export const LovedMoviesPres = ({ movies }: SwipeAmovieProps) => {
  return (
    <div className="align-center mb-14 mt-4 flex w-full flex-wrap content-center justify-between ">
      {movies.map((movie) => (
        <LovedMovieCard key={movie.imdb_id} {...movie} />
      ))}
    </div>
  );
};
