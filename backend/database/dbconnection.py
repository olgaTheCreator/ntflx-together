from typing import List
from mayim import SQLiteExecutor
from pydantic import BaseModel # pylint: disable=no-name-in-module


class MotionPicture(BaseModel):
    """Motion Picture Data"""
    type: str
    title: str
    imdb_rating: int
    poster_url: str
    season_count: int


class PicturesExecutor(SQLiteExecutor):
    async def create_table(self) -> None:
        ...
    async def insert_pictures(self, type: str, title: str, imdb_rating: int, poster_url: str, season_count: int) -> None:
        ...
    async def select_results(self) -> List[MotionPicture]:
        ...