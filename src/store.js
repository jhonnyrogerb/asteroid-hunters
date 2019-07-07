import { applyMiddleware, createStore } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';

import reducer from './reducer';
import client from './client';

const middlewares = [];
middlewares.push(thunk);
middlewares.push(axiosMiddleware(client));

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
