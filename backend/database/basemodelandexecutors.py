"""create data models and mayim executors"""
# from typing import List
from mayim import SQLiteExecutor
from pydantic import BaseModel # pylint: disable=no-name-in-module


class MotionPicture(BaseModel):
    """Motion Picture Data"""
    imdb_id:str
    media_type: str
    title: str
    imdb_rating: int
    link: str
    poster_url_342: str
    poster_url_780: str
    season_count: int


class PicturesExecutor(SQLiteExecutor):
    async def create_table(self) -> None:
        """create motion pictures table"""
    async def insert_pictures(self,imdb_id:str, media_type: str, title: str, imdb_rating: int, link: str, 
                              poster_url_342: str, poster_url_780: str, season_count: int) -> None: #pylint: disable=W0613
        """insert all motion pictures data into table"""
    async def select_results(self) -> list[MotionPicture]: #type: ignore
        """select all data from motion_pictures table"""
