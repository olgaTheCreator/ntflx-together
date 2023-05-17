"""Pydantic models to validate data"""
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

