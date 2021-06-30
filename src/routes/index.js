const meRouter = require('./me');
const coursesRouter = require('./courses');
const authRouter = require('./auth');
const siteRouter = require('./site');

function route(app){
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/auth', authRouter);
    app.use('/', siteRouter);
}

module.exports = route;