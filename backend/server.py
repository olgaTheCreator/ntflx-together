# pyright: reportUnknownMemberType=false
"""main application file"""

from sanic import Sanic, response, Request
from sanic.response import json
from sanic_ext import Extend, validate
from mayim import Mayim
from mayim.sql.sqlite.interface import SQLitePool
from models import User
from database.executors import PicturesExecutor  #type: ignore



app = Sanic("netflix-together")
app.config.CORS_ORIGINS = ["http://192.168.0.103", "http://0.0.0.0:8000"]
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


@app.after_server_stop
async def shutdown_mayim(app: Sanic):
    await app.ctx.pool.close()


@app.route("/api")
async def index(request: str):  # pylint: disable=unused-argument
    """Return json"""
    return response.json({"llo": "world!"})


@app.route("/loved")
async def results(request: Request, executor: PicturesExecutor):
    movies = await executor.select_results()
    return json({"movies": [movie.dict() for movie in movies[100:140]]})

@app.route("/single")
async def single(request: Request, executor: PicturesExecutor):
    movie = await executor.select_results()
    return json({"movie": movie[92].dict()})

@app.post("/register")
@validate(json=User)
async def handler(request:Request, body: User):
    return json(body.dict())


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, dev=True)
