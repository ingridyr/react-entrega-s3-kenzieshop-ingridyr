import ProductList from "../../components/ProductList";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="mainContainer">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
