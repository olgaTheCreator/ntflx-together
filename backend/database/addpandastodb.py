import asyncio
from mayim import Mayim
from mayim.sql.sqlite.interface import SQLitePool
from dbconnection import PicturesExecutor # type: ignore
from parsejsontopandas import pictures_data_to_dataframe

async def insert_data_into_db():
    executor = PicturesExecutor()
    db_path="./motion_pictures.db"
    pool = SQLitePool(db_path)
    await pool.open()
    Mayim(pool = pool, executors=[executor])
    data = pictures_data_to_dataframe()
    if data is not None:
        for row in data:
            media_type = row["type"]
            title = row["title"]
            imdb_rating = int(row["imdbRating"])
            poster_url = row["posterURLs.154"]
            season_count = int(row["seasonCount"])
            await executor.insert_pictures(media_type, title, imdb_rating, poster_url, season_count)
    print(await executor.select_results())
    await pool.close()

asyncio.run(insert_data_into_db())
