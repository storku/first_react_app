const routes = require('next-routes')(); //imports and runs the function

//this is from udemy ethereum course
routes.add('/articles/:articleName', '/articles/article_template');

module.exports = routes;
