const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const webpack = require('webpack');
const lusca = require('lusca');
const compression = require('compression');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { config } = require('dotenv')

const webpackConfig = require('../webpack.config');

config();
const app = express();

if (process.env.NODE_ENV !== 'production') {
    const webpackCompiler = webpack({ ...webpackConfig, mode: 'development' });
    const { publicPath } = webpackConfig.output;

    app.use(webpackDevMiddleware(webpackCompiler, { publicPath }));
    app.use(webpackHotMiddleware(webpackCompiler));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(compression());
app.use(express.static(path.join(__dirname, 'dist')));

const indexRouter = require('./routers/index');
const usersRouter = require('./routers/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
