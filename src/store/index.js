import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import productReducer from "../reducers/products";
// import cartReducer from "../cart/cartReducer";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : a => a;

const store = createStore(
  combineReducers({
    product: productReducer
    // cart: cartReducer
  }),
  compose(
    applyMiddleware(thunk),
    devTools
  )
);

export default store;
