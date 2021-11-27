import { useState } from "react";
import FilterList from "../FilterList";

import "./style.css";

const SearchBar = () => {
  const [toggleFilter, setToggleFilter] = useState(false);

  return (
    <div className="searchBarContainer">
      <form>
        <input type="text" placeholder="pesquisa por nome" />
        <button>Go</button>
      </form>
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
