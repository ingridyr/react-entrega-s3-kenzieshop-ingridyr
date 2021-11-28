import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";
import { removeFromCart } from "../../store/modules/cart/actions";

import "./style.css";

const ProductCards = ({ product, removeItem = false, index }) => {
  const { id, name, image, price } = product;

  const dispatch = useDispatch();

  return (
    <div key={id} className="cardBox">
      <img src={image} alt={`img${id}`} />
      <div>
        <p className="title">{name}</p>
        <p className="price">{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</p>
        {/* <p className="qtd">qtd</p> tentar implementar quantidade*/}
      </div>
      {removeItem ? (
        <button className="buttonRemove" onClick={() => dispatch(removeFromCart(index))}>X</button>
      ) : (
        <button className="buttonAdd"onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCards;
