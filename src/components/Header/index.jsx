//aqui vem a logo, a barra de pesquisa, o botão do carrinho e o botão de login
import { useState } from "react";
import Cart from "../Cart"
import "./style.css";

const Header = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <header>
      <nav>
        <div className="logo">
          <h3>kenzieShop</h3>
        </div>

        <div className="cartBox">
        {toggle ? (
              <div className="toggleBox">
                <button className="showCart" onClick={() => setToggle(false)}>
                  ...
                </button>
                <Cart/>
              </div>
            ) : (
              <div>
                <button className="showCart" onClick={() => setToggle(true)}>
                cart
                </button>
              </div>
            )}
          <button>Login</button>
        </div>
      </nav>
      <form>
        <input type="text" placeholder="pesquisa por nome" />
        <button>Go</button>
      </form>
    </header>
  );
};

export default Header;
