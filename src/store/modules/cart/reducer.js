import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
const cartState = JSON.parse(localStorage.getItem("@cart")) || [];

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product } = action;
      return product;

    case REMOVE_FROM_CART:
      const { index } = action;
      return index;

    default:
      return state;
  }
};

export default cartReducer;
