import { useDispatch } from "react-redux";
import { addToCartThunk, removeFromCartThunk } from "../../store/modules/cart/thunks";
import { toast } from "react-toastify"

import "./style.css";

const ProductCards = ({ product, removeItem = false, index }) => {
  const { id, name, image, price } = product;

  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToCartThunk(product))
    toast("Sucess!")
  }

  return (
    <div key={id} className="cardBox">
      <img src={image} alt={`img${id}`} />
      <div>
        <p className="title">{name}</p>
        <p className="price">
          {price
            .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
            .replace(".", ",")}
        </p>
        {/* <p className="qtd">qtd</p> tentar implementar quantidade*/}
      </div>
      {removeItem ? (
        <button
          className="buttonRemove"
          onClick={() => dispatch(removeFromCartThunk(index))}
        >
          X
        </button>
      ) : (
        <>
          <button
            className="buttonAdd"
            onClick={() => handleClick(product)}
          >
            Add to cart
          </button>
        </>
      )}
    </div>
  );
};

export default ProductCards;
