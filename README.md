# Synopsis

This is a shorten url API.

## Usage example

See demo - https://short-url-client-cb.herokuapp.com/

## Directory Structure

```bash

short-url-server
├── models
│   ├── urlModel.js
├── routes
│   ├── urlRoute.js
├── index.js
├── package-lock.json
├── package.json
└── README.md

```

## Running the project

Clone this repository :

```bash
git clone https://github.com/ChrisBapin/short-url-server.git

cd short-url-server
```

Install packages

```bash
npm install
```

When installation is complete, start the server using this command.

```bash
nodemon index.js
```

ps. I recommend to install Postman to improve the API development

Built With

- JavaScript
- Node.js
- Express.js
- Postman -> Improves API development
- mongoose
