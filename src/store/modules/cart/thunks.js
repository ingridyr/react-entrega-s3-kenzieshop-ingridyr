import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (productItem) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const saveCart = [...cart, productItem];
    localStorage.setItem("@cart", JSON.stringify(saveCart));
    dispatch(addToCart(saveCart));
  };
};

export const removeFromCartThunk = (productIndex) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const newCart = cart.filter((_, currIndex) => currIndex !== productIndex);
    localStorage.setItem("@cart", JSON.stringify(newCart));
    dispatch(removeFromCart(newCart));
  };
};
