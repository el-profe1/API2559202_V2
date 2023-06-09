const express = require('express');
const commentsRouter = require('./commentsRouter');
const sessionsRouter = require('./sessionsRouter');
const moviesRouter = require('./moviesRouter');
const theatersRouter = require('./theatersRouter');
const usersRouter = require('./usersRouter');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/movies', moviesRouter); //la app que creamos con express va a asociar la ruta movies con el controlador moviesRouter
    router.use('/users', usersRouter);
    router.use('/comments', commentsRouter);
    router.use('/sessions', sessionsRouter);
    router.use('/theaters', theatersRouter);
}

module.exports = routerApi;