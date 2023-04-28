"""main application file"""
# import sqlite3

from sanic import Sanic, response
from sanic_ext import Extend


app = Sanic("netflix-together")
app.config.CORS_ORIGINS = "http://0.0.0.0:8000"
Extend(app)

# con = sqlite3.connect("movies.db")


@app.route("/api")
async def index(request: str):  # pylint: disable=unused-argument
    """Return json"""
    return response.json({"llo": "world!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, dev=True) # pyright: reportUnknownMemberType=false
