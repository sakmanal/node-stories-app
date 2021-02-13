# Node Stories

A server-side Node.js/Express/MongoDB app with Google OAuth for authentication, where users can create public and private stories from their life.

### Usage
1. Rename `config-sample.env` to `config.env` and add your mongoDB URI and Google OAuth credentials.
2. Install dependencies: `npm install`.
3. Run in development: `npm run dev`.
4. Run in production: `npm start`.

### Run mongoDB on a Docker container
If you don't have mongoDB installed locally or on a remote server, you can use a Docker container running `docker-compose up`.