import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import toDoListReducer from './toDoList/toDoList';
import toDoListSelectedReducer from './toDoList/toDoListSelected';

const rootReducer = combineReducers({
  toDoListReducer,
  toDoListSelectedReducer,
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware),
);

export default store;
