//aqui vem a div do carrinho que vai aparecer ao clicar no botao
//ela será um position absolute na lateral direita
import { useSelector } from "react-redux";
import ProductCards from "../ProductCards";

import "./style.css";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0)

  return (
    <div className="cartContainer">
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div className="cartItems">
              <ProductCards key={index} product={item} removeItem index={index}/>
            </div>
          ))}
          <div>
            <p className="totalPrice">
              Total Purchase: {totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </p>
          </div>
        </>
      ) : (
        <div>
          <p className="warning1">Your cart is empty</p>
          <p className="warning2">Add items</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
