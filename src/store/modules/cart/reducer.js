import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product } = action;
      return [...state, product];

    case REMOVE_FROM_CART:
      const { index } = action;
      const newList = state.filter((_, currIndex) => currIndex !== index);
      return newList;

    default:
      return state;
  }
};

export default cartReducer;
