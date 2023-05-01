import asyncio
# from sanic import Sanic
# from sanic_ext import Extend
from mayim import Mayim, SQLiteExecutor, query
# from mayim.extensions import SanicMayimExtension # pylint: disable=no-name-in-module
from pydantic import BaseModel # pylint: disable=no-name-in-module


class Person(BaseModel):
    """Person's name"""
    name: str


class PersonExecutor(SQLiteExecutor):
    @query("SELECT $name as name")
    async def select_person(self, name: str) -> Person:
        ...

# Extend.register(
#     SanicMayimExtension(
#         executors=[PersonExecutor], dsn=""
#     )
# )

async def run():
    executor = PersonExecutor()
    Mayim(db_path="./example.db")
    print(await executor.select_person(name="Adam"))

asyncio.run(run())
