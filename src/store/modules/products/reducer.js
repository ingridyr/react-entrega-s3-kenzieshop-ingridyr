import { productsList } from "../../../ProductsList/productsList";
import { SHOW_PRODUCTS } from "./actionTypes";

const initialState = productsList;

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return action;

    default:
      return state;
  }
};

export default productsReducer;