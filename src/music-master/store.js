import {createStore, combineReducers, applyMiddleware} from 'redux';
import musicReducer from './reducers/musicReducer';
import logger from 'redux-logger';

const store = createStore(combineReducers({musicReducer}),{}, applyMiddleware(logger));

export default store;