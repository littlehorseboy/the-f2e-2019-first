import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import toDoListReducer from './toDoList/toDoList';

const rootReducer = combineReducers({
  toDoListReducer,
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware),
);

export default store;
