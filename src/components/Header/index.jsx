//aqui vem a logo, a barra de pesquisa, o botão do carrinho e o botão de login
import { useState } from "react";

import Cart from "../Cart";
import "./style.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <h3>kenzieShop</h3>
        </div>

        <div className="cartButton">
          {toggle ? (
            <div className="cartBox">
              <button className="showCart" onClick={() => setToggle(false)}>
                close cart
              </button>
              <Cart />
            </div>
          ) : (
            <div>
              <button className="showCart" onClick={() => setToggle(true)}>
                cart
              </button>
            </div>
          )}
          <button className="buttonLogin">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
