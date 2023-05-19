"""create data models and mayim executors"""
import sys
from mayim import SQLiteExecutor
sys.path.append('..')
from models import MotionPicture #pylint: disable=E0401, C0413
class PicturesExecutor(SQLiteExecutor):
    async def create_table_motion_pictures(self) -> None:
        """create motion pictures table"""

    async def create_table_users(self) -> None:
        """create users table"""

    async def create_table_swiped_movies(self) -> None:
        """create movies swiped by users table"""

    async def insert_pictures(self,imdb_id:str, media_type: str, title: str, imdb_rating: int, link: str, 
                              poster_url_342: str, poster_url_780: str, season_count: int) -> None: #pylint: disable=W0613
        """insert all motion pictures data into table"""

    async def insert_user(self,username:str, uuid_public: str, uuid_private: str) -> None: #pylint: disable=W06
        """add user data into table"""

    async def insert_swiped_movie(self, uuid_public: str, imdb_id: str, liked: int) -> None: #pylint: disable=W06
        """add swiped movie into table"""

    async def select_results(self) -> list[MotionPicture]: #type: ignore
        """select all data from motion_pictures table"""

    async def select_not_swiped_movies(self, uuid_public: str) -> list[MotionPicture]: #type: ignore
        """select movies not swiped by user"""

    async def select_loved_movies(self, uuid_public: str) -> list[MotionPicture]: #type: ignore
        """select movies loved by user"""


    
