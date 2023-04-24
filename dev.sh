#!/bin/sh

(cd frontend && yarn start) & (cd backend && pipenv run python app.py)