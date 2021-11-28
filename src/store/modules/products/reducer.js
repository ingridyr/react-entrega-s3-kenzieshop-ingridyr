import { productsInfo } from "../../../ProductsInfo/productsInfo";
import { SHOW_PRODUCT, FILTER_PRODUCTS, FILTER_CHECKBOX } from "./actionTypes";

const initialState = productsInfo;

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT:
      return state;

    case FILTER_PRODUCTS:
      const newList = state.filter((currValue) => {
        let currProduct = currValue.name.toLowerCase();
        action.input = action.input.toLowerCase();
        return currProduct.includes(action.input);
      });

      if (action.input) {
        return newList;
      } else {
        state = initialState;
        return state;
      }

    case FILTER_CHECKBOX:
      const filtered = state.filter((currValue) => {
        let currProduct = currValue.category;
        return currProduct.includes(action.input);
      });

      if (action.input) {
        return filtered;
      } else {
        state = initialState;
        return state;
      }

    default:
      return state;
  }
};

export default productsReducer;
