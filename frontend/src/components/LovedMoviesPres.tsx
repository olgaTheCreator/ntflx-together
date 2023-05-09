import { MovieCard, MovieCardProps } from './cards/MovieCard';

interface SwipeAmovieProps {
  movies: MovieCardProps[];
}
export const LovedMoviesPres = ({ movies }: SwipeAmovieProps) => {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.imdb_id} {...movie} />
      ))}
    </>
  );
};
