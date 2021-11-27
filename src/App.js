import ProductList from "./components/ProductList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className="mainContainer">
        <ProductList />
      </div>
    </>
  );
}

export default App;

// => header contem: logo, botão do carrinho e botão de login
// => searchBar contem: barra de pesquisa e filtragem de itens
// => productList contem: componente de listagem dos itens da vitrine
