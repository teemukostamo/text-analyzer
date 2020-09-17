# Text analyzer

A Node.js app written in TypeScript. The API endpoint `/analyze` returns the length, word count and character count of a string sent in the body of a `POST` request.

## Installing / Getting started

- Clone the repository and `npm install` dependencies.
- Create a `.env` file in the project root directory and add a `PORT` variable with the value of your preferred port. Without the `.env` file the app starts in default port `5000`.
- Run `npm run dev` to start the server in development mode.

## Tests

Tests are located in the `src/tests` folder. Run the tests with `npm run test`.

## Docker

- To build a Docker image of the repository, run `docker build -t text-analyzer .` in the root directory

- To run the container, run `docker run -p 5000:5000 text-analyzer`
