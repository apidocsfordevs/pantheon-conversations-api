# pantheon-conversations-api

Dummy repository representing the Conversations microservice of the Pantheon API (from [API Documentation for Developers](https://apidocsfordevs.com)).

## Documentation
The documentation for all our APIs is hosted at http://pantheon-docs.vercel.app. The reference documentation for this API is pulled from the `openapi.yaml` file in the root of this repository at build time (by Travis CI). Remember to update the OpenAPI file after making any changes to the API.

## Setup
- Install dependencies:
  ```
  npm install
  ```
- Copy the `.env.example` file to a `.env` file, and update the values with relevant ones for your environment.
- Start the app:
  ```
  npm start
  ```
