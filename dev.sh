#!/bin/sh

(cd frontend && yarn start) & (cd backend && pipenv shell && python server.py)