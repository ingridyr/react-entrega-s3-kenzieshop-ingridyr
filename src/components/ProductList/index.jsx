import { useSelector } from "react-redux";
import ProductCards from "../ProductCards";

import "./style.css";

const ProductList = () => {
  const products = useSelector((store) => store.products);

  return (
    <section>
      {products.map((item, index) => (
        <ProductCards product={item} key={index} />
      ))}
    </section>
  );
};

export default ProductList;
