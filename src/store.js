import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';


let middlewares = [promise];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
