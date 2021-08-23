import { createStore, combineReducers } from "redux";
import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

const reducers = combineReducers({ categories: categoryReducer, products: productsReducer, cart: cartReducer });

function store() {
  return createStore(reducers);
}
export default store();