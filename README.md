# Text analyzer

A Node.js app written in TypeScript. The API endpoint `/analyze` returns the length, word count and character count of a string sent in the body of a `POST` request.

## Installing / Getting started

- Clone the repository and `npm install` dependencies.
- Create a `.env` file in the project root directory and add a `PORT` variable with the value of your preferred port. Without the `.env` file the app starts in default port `5000`.
- Run `npm run dev` to start the server in development mode.

You can now verify that the server is up by navigating to `localhost:5000/ping`.

## Using the API

To try the API in development mode, you can:

           `curl --header "Content-Type: application/json" \
            --request POST \
            --data '{"text":"hello world"}' \
            localhost:5000/analyze`

To try the API with Postman, set `Content-Type: application/json` headers and send a POST request to `localhost:5000/analyze` with the following data:

`{ "text": "Your awesome text" }`

Please note that the `"text"` attribute is mandatory for the app to work.

## Building and running the app in production mode

- Run `npm run build` to compile TypeScript files into JavaScript.
- Run `npm start` to run the app in production mode

## Tests

Tests are located in the `src/tests` folder. Run the tests with `npm run test`.

## Docker

- To build a Docker image of the repository, run `docker build -t text-analyzer .` in the root directory

- To run the container, run `docker run -p 5000:5000 text-analyzer`

## Deployment

The app is configured to be deployed in Heroku. You can either use CircleCI or deploy straight to Heroku.

### Deploying straight to Heroku

- To create a production build and deploy the application to Heroku, set up a Heroku remote for the repository, run `heroku config:set PORT=5000` to set the PORT varible, and run `npm run deploy:full`.

## Licensing

The code in this project is licenced under MIT licence.
