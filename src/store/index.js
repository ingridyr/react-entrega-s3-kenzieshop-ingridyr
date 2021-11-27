import { createStore, combineReducers } from "redux";

import reducerProducts from "./modules/products/reducer"

const reducers = combineReducers({ products: reducerProducts });

const store = createStore(reducers);

export default store;