import { SHOW_PRODUCT, FILTER_PRODUCTS, FILTER_CHECKBOX} from "./actionTypes";

export const showProduct = (product) => ({
  type: SHOW_PRODUCT,
  product,
});

export const filterProducts = (input) => ({
  type: FILTER_PRODUCTS,
  input,
});

export const filterCheckbox = (input, event) => ({
  type: FILTER_CHECKBOX,
  input,
  event,
});
