import { useDispatch } from "react-redux";
import { filterCheckbox } from "../../store/modules/products/actions";
import "./style.css";

const FilterList = () => {
  const dispatch = useDispatch();

  const handleClick = (category, event) => {
    dispatch(filterCheckbox(category, event));
  };

  return (
    <aside>
      <ul>
        <h5>Search by Filter:</h5>
        <div>
          <input
            type="checkbox"
            name="cats"
            /* onClick={() => dispatch(filterCheckbox("cats"))} */
            onClick={(event) => handleClick("cats", event)}
          />
          <label for="cats">Cats</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="dogs"
            onClick={(event) => handleClick("dogs", event)}
          />
          <label for="dogs">Dogs</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="fishes"
            onClick={(event) => handleClick("fishes", event)}
          />
          <label for="fishes">Fishes</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="rodents"
            onClick={(event) => handleClick("rodent", event)}
          />
          <label for="rodents">Rodents</label>
        </div>
      </ul>
    </aside>
  );
};

export default FilterList;
