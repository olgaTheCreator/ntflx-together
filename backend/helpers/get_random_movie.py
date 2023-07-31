import random
import sys
sys.path.append('../..')

from models import MotionPicture

def get_random_movie(movies: list[MotionPicture]) -> MotionPicture:

    total_rating = sum(movie.imdb_rating for movie in movies)
    weights = [movie.imdb_rating / total_rating for movie in movies]
    random_movie = random.choices(movies, weights=weights)[0]
    
    return random_movie
