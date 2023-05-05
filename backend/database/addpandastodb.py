# pylint: disable=E0401
"""insert all netflix data into database"""
import asyncio
from mayim import Mayim
from mayim.sql.sqlite.interface import SQLitePool
from basemodelandexecutors import PicturesExecutor # type: ignore
from parsejsontopandas import pictures_data_to_dataframe

async def insert_data_into_db():
    """set up connection with database and insert the data"""
    executor = PicturesExecutor()
    db_path="./motion_pictures.db"
    pool = SQLitePool(db_path)
    await pool.open()
    Mayim(pool = pool, executors=[executor])
    data = pictures_data_to_dataframe()
    if data is not None:
        for row in data:
            imdb_id: str = row["imdbId"]
            media_type: str = row["type"]
            title:str = row["title"]
            imdb_rating:int = int(row["imdbRating"])
            link:str = row["link"]
            poster_url_342:str = row["posterURLs.342"]
            poster_url_780:str = row["posterURLs.780"]
            season_count:int = int(row["seasonCount"])
            await executor.insert_pictures(imdb_id, media_type, title, imdb_rating, link, 
                                           poster_url_342,poster_url_780, season_count)
    print(await executor.select_results())
    await pool.close()

asyncio.run(insert_data_into_db())
