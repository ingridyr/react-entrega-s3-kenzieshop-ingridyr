import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../store/modules/products/actions"

import FilterList from "../FilterList";

import "./style.css";

const SearchBar = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch()

  return (
    <div className="searchBarContainer">
      <div>
        <input type="text" placeholder="pesquisa por nome" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
        <button type="button" onClick={() => dispatch(filterProducts(inputValue))}>Go</button>
      </div>
      {toggleFilter ? (
        <div className="toggleBoxFilterList">
          <button
            className="showFilterList"
            onClick={() => setToggleFilter(false)}
          >
            Filter
          </button>
          <FilterList />
        </div>
      ) : (
        <div>
          <button
            className="showFilterList"
            onClick={() => setToggleFilter(true)}
          >
            Filter
          </button>
        </div>
      )}
    </div>
  );
};
export default SearchBar;
