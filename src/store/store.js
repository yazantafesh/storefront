import { createStore, combineReducers } from "redux";
import categoryReducer from './categories';
import productsReducer from './products';

const reducers = combineReducers({ categories: categoryReducer, products: productsReducer });

function store() {
  return createStore(reducers);
}
export default store();