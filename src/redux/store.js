import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
