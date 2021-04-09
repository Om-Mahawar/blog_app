import { createStore, combineReducers } from 'redux';
import blogReducer from '../reducers/blog';
import filtersReducer from '../reducers/filters';

const Store = createStore(
  combineReducers({
    blogs: blogReducer,
    filters: filtersReducer,
  })
);

export default Store;
