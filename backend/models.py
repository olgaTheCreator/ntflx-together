"""Pydantic models to validate data"""
from typing import Literal
from pydantic import BaseModel, UUID4

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

class User(BaseModel):
    """User Registration data"""
    username: str
    uuid_public: UUID4
    uuid_private: UUID4

class Swiped(BaseModel):
    """Swiped movie"""
    uuid_public: UUID4
    imdb_id: str
    liked: Literal['yes', 'no']