# TOGETHER
#### Video Demo:  https://www.youtube.com/watch?v=XwibGAgD3SA
#### Description:

Watch a movie with a friend, Together!

Good news - it is a mobile-friendly web-app! 
Hosted at:

https://olgathecreator.co.uk/together/

Just click and try it out!

## How to use Together?

1. Pick a name.
2. Swipe right the movies you want to watch, right?
3. Swipe left the movies you do not want.
3. Add a friend by scanning their code or visiting their URL.
4. Choose them to see the movies both of you want to watch!

## Basic directory structure.

The app consists of Python sanic backend living in the `backend` directory and a react frontend living in the `frontend` directory.
SQL-Lite database keeps the data safe and consistent.

## How to modify / deploy locally

### Frontend:

1. Clone the app from github

`git clone https://github.com/olgaTheCreator/ntflx-together.git`

2. Go to the frontend directory

`cd ntflx-together/frontend`

3. Install yarn dependencies

`yarn`

4. Run the type-check / build / serve.

`yarn start`

If you want to build to deploy - run `yarn build`.

The frontend will communicate directly with the production backend. To make it communicate with your local backend change `http_url` in `frontend/src/context/Url_

### Backend

To run the backend:

1. Go to the backend dir

`cd backend`

2. Install pipenv dependencies

`pipenv install`

3. Run `server.py` with pipenv

`pipenv run python server.py`

The backend has a dockerfile!

You can build docker container in the backend directory by running `docker build -t together .` and then deploy it with `docker run -d -p 3000:3000 --mount type=bind,source='./database/motion_pictures.db',target='/app/database/motion_pictures.db' together`

---

Running a fully functional stack locally is not easy! The biggest problem is getting the data.

Making the process of getting the data into the database less convoluted is on the TODO list.

If you want to give it a try, check the commented-out code in `backend/helpers/import_data.py`.

You can get your API token by visiting https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/pricing


## Notes on the architecture 

Together is a full stack app consisting of Python backend and frontend.


### Frontend

The frontend is a Single Page App written in `typescript` and `react`. It uses `axios` for data fetching, `formik` for forms, `tailwind` for css.

It is built using `esbuild` and utilizes `prettier` and `eslint` for code quality control.

The main entrance to frontend is in `src/main.tsx` and the file `src/app.tsx` contains main components with `react-router` routes.

The `src/context` directory stores the most important state - the URL of backend, the URL for linking to frontend and main local state stored by `src/context/UserContext.tsx`.

The `src/assets` directory contains graphic assets.

The `src/components` directory contains all the components of the app. They are mostly divided between presentational (`*Pres.tsx`) storing the presentation and smart (`*Container.tsx`) components, which contain the logic data fetching and other state hooks. React hooks are used for data fetching, state control, side effects, and integrating external libraries. For example `src/components/ShareYourUrl` wraps the external `react-qr-code` library.

### Backend

I use `sanic` library for the server and `pipenv` for the management of dependencies and python version control. The `Dockerfile` describes the container for ease of deployment in production.

The `backend/server.py` is the entry point to the backend. It defines all the routes available in the http api. The routes use models stored in `models.py` and database executors imported from `database/executors`.

The most advanced logic is between the `helpers/import_data.py` module and `database/parsejsontopandas.py` module and their dependencies. The problem they solve is getting all the movies from a remote api, parsing, sanitizing, deduplicating, and dumping them into a database. They use `pandas` to achieve it and communicate in the style of UNIX programs by having a file in between.

The file allows for easy introspection of the data and iteration with the `pandas` part of the code.

One of the left-out tasks is to fully automatize the importing of the movies using a cronjob. For running the update of the database requires manual intervention.

I have decided that it is less important than other functionality as it is not visible to the end user.

## Design choices

The frontend choices were not complex to me, as `react` with hooks and `axios`, as well as `tailwind` are pretty vanilla choices for a frontend developer. I wish I used `vite` instead of `esbuild` for the frontend build, as it is easier to work with and uses `esbuild` under the hood anyway. Making `esbuild` work conveniently with `react` needed putting a proxy server between the `esbuild` and frontend inside the `esbuild.dev.mjs` file.

The backend was exciting. I went with the `sanic` python library which is fully asynchronous, thus reminding me of the asynchronicity of the `node.js`. Deploying the backend via docker enables me to effortlessly host it on my Linux server.

## TODO

There is some UX I could solve both on the user side (smoothing out the experience) and DX (automatically updating the movies into the database).

The app, because of using SQL-lite with a single file is not very scalable, even though fast SSD, simple operations, and asynchronicity of `sanic` should make it able to cope with a bit of traffic.

It would be very cool to rewrite it in a more scalable way.