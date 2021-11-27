import { useSelector } from "react-redux";

import "./style.css";

const ProductCards = () => {
  const products = useSelector((store) => store.products);

  return (
    <>
      {products.map((item, index) => (
        <div key={index} className="cardBox">
          <img src={item.image} alt={`imagem ${index + 1}`} />
          <p>{item.name}</p>
          <p>R$ {item.price}</p>
          <button>add to cart</button>
        </div>
      ))}
    </>
  );
};

export default ProductCards;
