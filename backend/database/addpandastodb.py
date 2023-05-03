import asyncio
from dbconnection import PicturesExecutor # type: ignore
from parsejsontopandas import pictures_data_to_dataframe

executor = PicturesExecutor()

async def insert_data_into_db():
    data = pictures_data_to_dataframe()
    for row in data:
        media_type = row["type"]
        title = row["title"]
        imdb_rating = row["imdbRating"]
        poster_url = row["posterURLs.154"]
        season_count = row["seasonCount"]
        await executor.insert_pictures(media_type, title, imdb_rating, poster_url, season_count)

asyncio.run(insert_data_into_db())