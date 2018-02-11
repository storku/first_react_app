//this routing method is from https://learnnextjs.com
//it requires express
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = { title: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

/*
// this method is from the udemy ethereum course
// It does not use express
const {createServer} = require('http');
const next = require('next');

const app = next({
  dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes')
const handler = routes.getRequestHandler(app)

//asks app to listen to a specific port
app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if (err) throw err;
    console.log('Ready on localhost:3000');
  });
});
*/
