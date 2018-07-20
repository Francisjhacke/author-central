# Author-Central

## Getting Started
npm install -g yarn
npm install -g nodemon
npm install -g concurrently

yarn     // Install Packages
yarn dev // Start the dev server and frontend concurrently


## Package.json's
### Server
{
  "name": "author-central",
  "version": "1.0.0",
  "author": "",
  "scripts": {
    "client": "cd client && yarn start",
    "server": "nodemon server.js",
    "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
  },
  "dependencies": {
    "@types/prop-types": "^15.5.3",
    "body-parser": "^1.18.3",
    "express": "^4.16.2",
    "mongoose": "^5.2.1",
    "multer": "^1.3.1",
    "request": "^2.87.0",
    "request-promise": "^4.2.2",
    "typescript": "^2.9.2"
  },
  "devDependencies": {
    "concurrently": "^3.5.0"
  }
}

### Client
{
  "name": "author-central",
  "version": "0.1.0",
  "private": true,
  "dependencies": {

  },
  "scripts": {
    "start": "ng serve",
  },
  "devDependencies": {
    "@types/node": "^10.3.3",
    "typescript": "^2.9.2"
  },
  "proxy": "http://localhost:5000/"
}
