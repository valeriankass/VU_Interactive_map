# Basic tutorial

To see the website visit: [valeriankass.github.io/vu_interactive_map](http://valeriankass.github.io/VU_Interactive_map/)

master branch has latest deployment of website. production branch has source code.

## Install npm

Npm in essential to the way we run our app. Npm is part of Node.js. Download it from [nodejs.org](https://nodejs.org/en/download/)

## Run the app in development mode

Before running the server locally, you need to:
- create .env.local file and set your REACT_APP_GOOGLE_MAPS_API_KEY value.
- install dependencies
```bash
npm install
```

To run live version on your machine.
```bash
npm start
```

## Build the app for production and deploy it.

Before deploying you need to install gh-pages.
```bash
npm install gh-pages --save-dev
```

To deploy changes to github.
```bash
npm run deploy
```
