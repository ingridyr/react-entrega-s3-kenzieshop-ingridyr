//aqui vem a div do carrinho que vai aparecer ao clicar no botao
//ela será um position absolute na lateral direita
import { useSelector } from "react-redux";
import ProductCards from "../ProductCards";

import "./style.css";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

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
            <p>
              Total: R$
              {cart.reduce((acc, item) => {
                return acc + item.price;
              }, 0)}
            </p>
          </div>
        </>
      ) : (
        <div>
          <p>Your cart is empty</p>
          <p>Add items</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
