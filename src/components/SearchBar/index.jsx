import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../store/modules/products/actions";
import { BsFilterSquare, BsFilterSquareFill } from "react-icons/bs";

import FilterList from "../FilterList";

import "./style.css";

const SearchBar = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="searchBarContainer">
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          type="button"
          onClick={() => dispatch(filterProducts(inputValue))}
        >
          Go
        </button>
      </div>
      <p className="message">Find the perfect product for your pet here!</p>

      {toggleFilter ? (
        <div className="toggleBoxFilterList">
          <BsFilterSquareFill
            size={30}
            onClick={() => setToggleFilter(false)}
            color="blueviolet"
            title="filter button"
          />

          <FilterList />
        </div>
      ) : (
        <div className="toggleBoxFilterList">
          <BsFilterSquare
            size={30}
            onClick={() => setToggleFilter(true)}
            color="blueviolet"
            title="filter button"
          />
        </div>
      )}
    </div>
  );
};
export default SearchBar;
