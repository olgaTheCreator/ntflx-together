"""main application file"""
# import sqlite3

from sanic import Sanic, response
from sanic_ext import Extend
# import pandas as pd
from mayim import Mayim
from mayim.sql.sqlite.interface import SQLitePool
from database.dbconnection import PicturesExecutor # type: ignore
from database.parsejsontopandas import pictures_data_to_dataframe
# from database.addpandastodb import insert_pictures_data_to_db


app = Sanic("netflix-together")
app.config.CORS_ORIGINS = "http://0.0.0.0:8000"
Extend(app)

# con = sqlite3.connect("movies.db")

@app.before_server_start
async def setup_mayim(app: Sanic):
    executor = PicturesExecutor()
    db_path = "./database/motion_pictures.db"
    app.ctx.pool = SQLitePool(db_path)
    await app.ctx.pool.open()
    Mayim(executors=[executor], pool=app.ctx.pool)
    app.ext.dependency(executor)


    await executor.create_table()
    
    
# @app.route("/daa")
# async def data(request: str):
#     daa = await pictures_data_to_dataframe()
#     if daa is not None:
#         return response.json({"Hi": "Bye"})
#     else:
#         return response.json({"miau": "hau"})
#         # for row in data:
#         #     media_type = row["type"]
#         #     title = row["title"]
#         #     imdb_rating = row["imdbRating"]
#         #     poster_url = row["posterURLs.154"]
#         #     season_count = row["seasonCount"]
#         #     print(media_type, title, imdb_rating, poster_url, season_count)


@app.after_server_stop
async def shutdown_mayim(app: Sanic):
    await app.ctx.pool.close()

@app.route("/api")
async def index(request: str):  # pylint: disable=unused-argument
    """Return json"""
    return response.json({"llo": "world!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, dev=True) # pyright: reportUnknownMemberType=false
