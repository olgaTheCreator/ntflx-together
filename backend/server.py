# pyright: reportUnknownMemberType=false
"""main application file"""
from uuid import UUID
from sanic import Sanic, response, Request
from sanic.response import json
from sanic_ext import Extend, validate
from mayim import Mayim
from mayim.sql.sqlite.interface import SQLitePool
from models import User, Swiped
from database.executors import PicturesExecutor  #type: ignore
from helpers.get_random_movie import get_random_movie




app = Sanic("netflix-together")
app.config.CORS_ORIGINS = ["https://149.102.149.125", "https://149.102.149.125:80", "https://0.0.0.0:8000", "https://olgathecreator.co.uk", "olgathecreator.co.uk"]
Extend(app)

# con = sqlite3.connect("movies.db")
executor = PicturesExecutor()

@app.before_server_start
async def setup_mayim(app: Sanic):

    db_path = "./database/motion_pictures.db"
    app.ctx.pool = SQLitePool(db_path)
    await app.ctx.pool.open()
    Mayim(executors=[executor], pool=app.ctx.pool)
    app.ext.dependency(executor)
    await executor.create_table_motion_pictures()
    await executor.create_table_users()
    await executor.create_table_swiped_movies()
    await executor.create_table_friends()


@app.after_server_stop
async def shutdown_mayim(app: Sanic):
    await app.ctx.pool.close()


@app.route("/api")
async def index(request: str):  # pylint: disable=unused-argument
    """Return json"""
    return response.json({"llo": "world!"})


@app.route("/loved/<user_uuid:str>")
async def results(request: Request,user_uuid: UUID, executor: PicturesExecutor):
    movies = await executor.select_loved_movies(str(user_uuid))
    return json({"movies": [movie.dict() for movie in movies]})

@app.route("/watch-together/<user_uuid:str>/<friend_uuid:str>")
async def watch_together(request: Request,user_uuid: UUID, friend_uuid: UUID, executor: PicturesExecutor):
    movies = await executor.select_watch_together(str(user_uuid), str(friend_uuid))
    return json({"movies": [movie.dict() for movie in movies]})

@app.route("/movie/<imdb_id:strorempty>")
async def by_imdb(request: Request,imdb_id: str, executor: PicturesExecutor):
    movie = await executor.select_movie_by_imdb_id(imdb_id)
    return json({"movie": movie.dict()})

@app.route("/user/<user_uuid:str>")
async def friend_data(request: Request, user_uuid: UUID, executor: PicturesExecutor):
    user_data = await executor.select_user(str(user_uuid))
    return json({"username": user_data.username,"public_uuid": str(user_data.uuid_public)})

@app.get("/friends/<user_uuid:str>")
async def friends_data(request: Request, user_uuid: UUID, executor: PicturesExecutor):
    friends = await executor.select_friends(str(user_uuid))
    return json({"friends": [{"username": friend.username, "uuid_public": str(friend.uuid_public)} for friend in friends]})

@app.post("/friends/<user_uuid:str>")
async def add_friend(request: Request, user_uuid: UUID, executor: PicturesExecutor):
    friend = request.json
    action = friend["action"]
    friend_uuid = str(friend["uuid_friend"])
    if action == "add":
        await executor.insert_friend(str(user_uuid), friend_uuid)
        return json({'message': 'Friend added'})
    elif action == "remove":
        await executor.delete_friend(str(user_uuid), friend_uuid)
        return json({'message': 'Friend removed'})
    

# @app.route("/single")
# async def single(request: Request, executor: PicturesExecutor):
#     movie = await executor.select_results()
#     return json({"movie": movie[92].dict()})

@app.route("/users/<user_uuid:str>")
async def user(request: Request, user_uuid: UUID, executor: PicturesExecutor):
    movies = await executor.select_not_swiped_movies(str(user_uuid))
    random_movie = get_random_movie(movies)
    return json({"movie": random_movie.dict(), "uuid": user_uuid})

@app.post("/imdb_id")
@validate(json=Swiped)
async def swipe(request: Request, body: Swiped, executor: PicturesExecutor):
    swiped_movie = (body.dict())
    uuid_public = str(swiped_movie["uuid_public"])
    imdb_id = swiped_movie["imdb_id"]
    preference = swiped_movie["liked"]
    liked = 0
    
    if preference == "yes":
        liked = 1
    await executor.insert_swiped_movie(uuid_public, imdb_id, liked)
    movies = await executor.select_not_swiped_movies(str(uuid_public))
    random_movie = get_random_movie(movies)
    return json({"movie": random_movie.dict(), "uuid": uuid_public})



@app.post("/register")
@validate(json=User)
async def handler(request:Request, body: User):
    new_user = (body.dict())
    await executor.insert_user(new_user["username"], str(new_user["uuid_public"]), str(new_user["uuid_private"]))
   
    return json({
        'message': 'User created'})


if __name__ == "__main__":
    app.run(host="149.102.149.125", port=3000, dev=True)
